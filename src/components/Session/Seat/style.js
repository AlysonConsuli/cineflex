import styled from "styled-components"

export const Circle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: solid 1px black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => !props.available && '#FBE192'};
    background-color: ${props => props.available && !props.selected && '#C3CFD9'};
    background-color: ${props => props.available && props.selected && '#8DD7CF'};
`