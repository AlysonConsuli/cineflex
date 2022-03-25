import { Seats } from "./style"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Seat } from "./Seat"

export const Session = () => {
    const [seats, setSeats] = useState([])
    const [selecteds, setSelecteds] = useState([])
    console.log(selecteds)

    const { sessionId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)

        promise.then(response => {
            const { data } = response
            console.log(data)
            setSeats(data.seats)
        })
        promise.catch(err => {
            console.log(err.response)
        })
    }, [])

    return (
        <Seats >
            <h1>Selecione o(s) assento(s)</h1>
            <div className="all">
                {seats.map(seat => {
                    return <Seat
                        available={seat.isAvailable}
                        fn={() => {
                            if (!selecteds.includes(seat.id)) {
                                seat.isAvailable && setSelecteds([...selecteds, seat.id])
                            }else{
                                seat.isAvailable && setSelecteds([...selecteds].filter(sel => sel !== seat.id))
                            }
                        }}
                        name={seat.name}
                    />
                })}
            </div>
        </Seats>
    )
}