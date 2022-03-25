import { MovieTime } from './style'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Time = () => {

    const [times, setTimes] = useState([])
    const [movie, setMovie] = useState({})

    const { movieId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

        promise.then(response => {
            const { data } = response
            console.log(data)
            setMovie(data)
            setTimes(data.days)
        })
        promise.catch(err => {
            console.log(err.response)
        })
    }, [])


    return (
        <MovieTime>
            <h1>Selecione o horário</h1>
            {times.map(time => {
                return (
                    <div key={time.id}>
                        <span>{time.weekday} - {time.date}</span>
                        {time.showtimes.map(num => <button key={num.id}>{num.name}</button>)}
                    </div>
                )
            })}
            <footer>
                <img src={movie.posterURL} alt={movie.title} />
                <span>{movie.title}</span>
            </footer>
        </MovieTime>
    )
}