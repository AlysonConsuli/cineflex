import { useState } from "react"
import { Circle } from "./style"

export const Seat = ({ key, available, fn, name }) => {

    const [selected, setSelected] = useState(false)

    return (
        <Circle
            key={key}
            available={available}
            onClick={() => {
                fn()
                setSelected(!selected)
            }}
            selected={selected}
        >
            <span>
                {name.length === 1 ? `0${name}` : name}
            </span>
        </Circle>
    )
}