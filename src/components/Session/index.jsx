import { Footer, Seats, Main, Example, Selected, Available, NotAvailable } from "./style"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Seat } from "./Seat"
import loading from "../../assets/loading.svg"
import { cpfMask } from "../../services/cpfMask"
import { Loading } from "../Movies/style"

export const Session = () => {

    const [movie, setMovie] = useState({})
    const { id, day, movie: infos, name: time, seats } = movie

    const [user, setUser] = useState({
        name: '',
        cpf: ''
    })
    const { name, cpf } = user

    const [seatSelected, setSeatSelected] = useState({
        seatsId: [],
        seatsName: []
    })
    const { seatsId, seatsName } = seatSelected

    const { sessionId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promise.then(response => {
            const { data } = response
            setMovie(data)
            console.log(data)
        })
        promise.catch(err => {
            console.log(err.response)
        })
    }, [])

    const navigate = useNavigate()

    function finish(e) {
        e.preventDefault()

        if (seatsId.length === 0) { return alert('Escolha algum assento') }
        if (cpf.length !== 14) { return alert('Insira o cpf corretamente') }

        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
            {
                ids: seatsId,
                name: name,
                cpf: cpf.replace(/[^0-9]/g, '')
            })
        promise.then(response => {
            console.log(response)
            navigate(
                '/sucesso',
                {
                    state: {
                        title: infos.title,
                        date: day.date,
                        time: time,
                        seats: seatsName,
                        name: name,
                        cpf: cpf
                    }
                }
            )
        })
        promise.catch(err => {
            console.log(err.response)
            alert('Algum desses assentos já foram reservados')
            navigate(`/assentos/${id}`)
        })
    }

    if (seats === undefined) {
        return (
            <Loading>
                <img src={loading} alt='loading' />
            </Loading>
        )
    }

    return (
        <Main>
            <h1>Selecione o(s) assento(s)</h1>
            <Seats >
                {seats.map(seat => {
                    return <Seat
                        key={seats.id}
                        available={seat.isAvailable}
                        fn={() => {
                            if (!seat.isAvailable) { return alert('Esse assento não está disponível') }

                            if (!seatsId.includes(seat.id)) {
                                setSeatSelected({
                                    ...seatSelected,
                                    seatsId: [...seatsId, seat.id],
                                    seatsName: [...seatsName, seat.name]
                                })
                            } else {
                                setSeatSelected({
                                    ...seatSelected,
                                    seatsId: [...seatsId].filter(el => el !== seat.id),
                                    seatsName: [...seatsName].filter(el => el !== seat.name)
                                })
                            }
                        }}
                        name={seat.name}
                    />
                })}
            </Seats>
            <Example>
                <div>
                    <Selected></Selected>
                    <span>Selecionado</span>
                </div>
                <div>
                    <Available></Available>
                    <span>Disponível</span>
                </div>
                <div>
                    <NotAvailable></NotAvailable>
                    <span>Indisponível</span>
                </div>
            </Example>
            <form onSubmit={finish}>
                <label htmlFor="name" >Nome do Comprador:</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Digite seu nome...'
                    required
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    value={name}
                />
                <label htmlFor="cpf" >CPF do comprador:</label>
                <input
                    type='text'
                    name='cpf'
                    id='cpf'
                    placeholder='Digite seu CPF...'
                    required
                    maxLength='14'
                    autoComplete='off'
                    onChange={(e) => {
                        setUser({ ...user, cpf: cpfMask(e.target.value) })
                    }}
                    value={cpf}
                />
                <button type="submit">Reservar assento(s)</button>
            </form>
            <Footer>
                <div>
                    <img src={infos.posterURL} alt={infos.title} />
                </div>
                <div>
                    <span>{infos.title}</span>
                    <span>{day.weekday} - {time}</span>
                </div>
            </Footer>
        </Main>
    )
}