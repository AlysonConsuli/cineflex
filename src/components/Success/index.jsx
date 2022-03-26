import { useLocation, Link } from "react-router-dom"
import { LastPage } from "./style"

export const Success = ({ name, cpf, global }) => {
    console.log(name)
    console.log(cpf)
    console.log(global)
    const navigate = useLocation();
    console.log(navigate.state)
    return (
        <LastPage>
            <h1>Success</h1>
            <h2>Filme e sessão</h2>

            <h2>Ingressos</h2>
            {global.seat.map(x => <div>{x}</div>)}

            <h2>Comprador</h2>

            <Link to="/">
                <button>Voltar pra Home</button>
            </Link>
        </LastPage>
    )
}