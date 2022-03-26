import styled from "styled-components";

export const Seats = styled.div`
    .all{
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
    }
`

export const Footer = styled.footer`
    img{
        width: 100px;
    }
`

/*export const Circle = styled.div`
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
    background-color: ${props => props.available ? '#C3CFD9' : '#FBE192'};
`*/