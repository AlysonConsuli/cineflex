import { $Movies } from './style'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

        promise.then(response => {
            const { data } = response
            console.log(data)
            setMovies(data)
        })
        promise.catch(err => {
            console.log(err.response)
        })
    }, [])

    return (
        <$Movies>
            <h1>Selecione o filme</h1>
            <main>
                {movies.map(movie => {
                    return (
                        <Link to={`/sessoes/${movie.id}`} key={movie.id} >
                            <div>
                                <img src={movie.posterURL} alt={movie.title} />
                            </div>
                        </Link>
                    )
                })
                }
            </main>
        </$Movies>
    )
}