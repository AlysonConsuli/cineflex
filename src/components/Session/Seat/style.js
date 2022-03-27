import styled from "styled-components"

export const Circle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 18px;
    background-color: ${props => !props.available && '#FBE192'};
    background-color: ${props => props.available && !props.selected && '#C3CFD9'};
    background-color: ${props => props.available && props.selected && '#8DD7CF'};
    border: solid 1px;
    border-color: ${props => !props.available && '#F7C52B'};
    border-color: ${props => props.available && !props.selected && '#808F9D'};
    border-color: ${props => props.available && props.selected && '#45BDB0'};
    cursor: ${props => props.available ? 'pointer' : 'default'};

    span{
        font-size: 11px;
    }
`