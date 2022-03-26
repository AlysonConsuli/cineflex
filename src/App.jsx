import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Movies } from './components/Movies'
import { Session } from './components/Session'
import { Success } from './components/Success'
import { Time } from './components/Time'
import { GlobalStyle } from './style'

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter >
                <Routes >
                    <Route path='/' element={<Movies />} />
                    <Route path='/sessoes/:movieId' element={<Time />} />
                    <Route path='/assentos/:sessionId' element={<Session />}/>
                    <Route path='/sucesso' element={<Success />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}