import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Movies } from './components/Movies'
import { Session } from './components/Session'
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
                    <Route path='/assentos/:sessionId' element={<Session />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

/*<Route path='/filme' element={<Time />} />
<Route path='/sessao' element={<Session />} />
<Route path='/sucesso' element={<Success />} />*/