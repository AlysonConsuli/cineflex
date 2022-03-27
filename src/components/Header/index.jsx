import { $Header } from "./style"
import arrow from "../../assets/arrow.svg"
import { useLocation, useNavigate } from "react-router-dom"

export const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <$Header>
            {location.pathname !== '/' &&
                <img
                    src={arrow}
                    alt="seta"
                    onClick={() => navigate(-1)}
                />}
            <span>CINEFLEX</span>
        </$Header>
    )
}