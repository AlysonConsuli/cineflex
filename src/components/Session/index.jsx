import { Footer, Seats } from "./style"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Seat } from "./Seat"

export const Session = ({ callbackName, name, callbackCpf, cpf, fn1 }) => {
    const [seats, setSeats] = useState([])
    const [selecteds, setSelecteds] = useState([])
    const [numberSelected, setNumberSelected] = useState([])

    /*const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')*/

    const [infos, setInfos] = useState({})
    const [weekday, setWeekday] = useState({})
    const [time, setTime] = useState('')

    console.log(selecteds)
    console.log(numberSelected)

    const { sessionId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promise.then(response => {
            const { data } = response
            console.log(data)
            setSeats(data.seats)
            setInfos(data.movie)
            setWeekday(data.day)
            setTime(data.name)
        })
        promise.catch(err => {
            console.log(err.response)
        })
    }, [])

    const navigate = useNavigate()

    function finish(e) {
        e.preventDefault()
        fn1(numberSelected)

        /*const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',
        {
            ids: selecteds,
            name: name,
            cpf: cpf
        })
        promise.then(response => console.log(response.data))
        promise.catch(err => console.log(err.response))*/

        navigate(
            '/sucesso',
            { state: { infosTitle: infos.title} }
        )
    }

    return (
        <>
            <Seats >
                <h1>Selecione o(s) assento(s)</h1>
                <div className="all">
                    {seats.map(seat => {
                        return <Seat
                            available={seat.isAvailable}
                            fn={() => {
                                if (!seat.isAvailable) { return '' }
                                if (!selecteds.includes(seat.id)) {
                                    setSelecteds([...selecteds, seat.id])
                                    setNumberSelected([...numberSelected, seat.name])
                                } else {
                                    setSelecteds([...selecteds].filter(sel => sel !== seat.id))
                                    setNumberSelected([...numberSelected].filter(el => el !== seat.name))
                                }
                            }}
                            name={seat.name}
                        />
                    })}
                </div>
            </Seats>
            <form onSubmit={finish}>
                <label for="name" >Nome do Comprador:</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Digite seu nome...'
                    required
                    onChange={callbackName}
                    value={name}
                />
                <label for="cpf" >CPF do comprador:</label>
                <input
                    type='number'
                    name='cpf'
                    id='cpf'
                    placeholder='Digite seu CPF...'
                    required
                    onChange={callbackCpf}
                    value={cpf}
                />
                <button type="submit">Reservar assento(s)</button>
            </form>
            <Footer>
                <img src={infos.posterURL} alt={infos.title} />
                <span>{infos.title}</span>
                <span>{weekday.weekday} - {time}</span>
            </Footer>
        </>
    )
}