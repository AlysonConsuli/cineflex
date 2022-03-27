import { MovieTime, Times } from './style'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export const Time = () => {
    const [movie, setMovie] = useState({})
    const { movieId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

        promise.then(response => {
            const { data } = response
            console.log(data)
            setMovie(data)
        })
        promise.catch(err => {
            console.log(err.response)
        })
    }, [])

    if (movie.days === undefined) {
        return <span>LOADING...</span>
    }

    return (
        <MovieTime>
            <h1>Selecione o horário</h1>
            {movie.days.map(time => {
                return (
                    <Times key={time.id}>
                        <span>{time.weekday} - {time.date}</span>
                        <div>
                            {time.showtimes.map(num => {
                                return (
                                    <Link to={`/assentos/${num.id}`} key={num.id} >
                                        <button>{num.name}</button>
                                    </Link>
                                )
                            })
                            }
                        </div>
                    </Times>
                )
            })}
            <footer>
                <div>
                    <img src={movie.posterURL} alt={movie.title} />
                </div>
                <span>{movie.title}</span>
            </footer>
        </MovieTime>
    )
}