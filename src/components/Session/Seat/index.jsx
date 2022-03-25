import { useState } from "react"
import { Circle } from "./style"

export const Seat = ({ available, fn, name }) => {

    const [selected, setSelected] = useState(false)
    
    return (
        <Circle
            available={available}
            onClick={() => {
                fn()
                setSelected(!selected)
            }}
            selected={selected}
        >
            <span>{name}</span>
        </Circle>
    )
}