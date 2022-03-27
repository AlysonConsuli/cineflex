import styled from "styled-components";

export const Main = styled.main`
    h1{
        font-size: 24px;
        margin: 43px auto;
        text-align: center;
        color: #293845;
    }
`

export const Seats = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    width: 327px;
    height: 251px;
`

export const Footer = styled.footer`
    min-height: 117px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 14px;
    padding-left: 10px;

    span{
        font-size: 26px;
        color: #293845;
    }

    div:first-child{
        width: 64px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }
    div:last-child{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    img{
        width: 48px;
        height: 72px;
    } 
`

export const Example = styled.div`
display: flex;
justify-content: space-evenly;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    div{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: black;
        border: 1px solid black;
    }
}
`