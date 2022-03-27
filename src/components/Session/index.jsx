import { Footer, Seats, Main, Example } from "./style"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Seat } from "./Seat"

export const Session = () => {

    const [movie, setMovie] = useState({})
    const { day, movie: infos, name: time, seats } = movie

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

        if (seatsId.length === 0) {
            alert('Escolha algum assento')
            return ''
        }
        if (cpf.length !== 11) {
            alert('Insira o cpf corretamente')
            return ''
        }

        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
            {
                ids: seatsId,
                name: name,
                cpf: cpf
            })
        promise.then(response => console.log(response.data))
        promise.catch(err => console.log(err.response))

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
    }

    if (seats === undefined) {
        return <span>LOADING...</span>
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
                            if (!seat.isAvailable) { return '' }

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
                    <div></div>
                    <span>Selecionado</span>
                </div>
                <div>
                    <div></div>
                    <span>Disponível</span>
                </div>
                <div>
                    <div></div>
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
                    type='number'
                    min='0'
                    name='cpf'
                    id='cpf'
                    placeholder='Digite seu CPF...'
                    required
                    onChange={(e) => setUser({ ...user, cpf: e.target.value })}
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