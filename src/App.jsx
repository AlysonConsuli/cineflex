import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Movies } from './components/Movies'
import { Session } from './components/Session'
import { Success } from './components/Success'
import { Time } from './components/Time'
import { GlobalStyle } from './style'

export const App = () => {

    const [global, setGlobal] = useState({
        seat: []
    })

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')

    return (
        <>
            <GlobalStyle />
            <BrowserRouter >
                <Routes >
                    <Route path='/' element={<Movies />} />
                    <Route path='/sessoes/:movieId' element={<Time />} />
                    <Route path='/assentos/:sessionId' element={<Session
                        callbackName={(e) => setName(e.target.value)}
                        name={name}
                        callbackCpf={(e) => setCpf(e.target.value)}
                        cpf={cpf} 
                        fn1={(par) => setGlobal({...global, seat: par})} />}
                    />
                    <Route path='/sucesso' element={<Success name={name} cpf={cpf} global={global} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}