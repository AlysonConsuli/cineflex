import styled from "styled-components";

export const Main = styled.main`
    h1{
        font-size: 24px;
        margin: 43px auto;
        text-align: center;
        color: #293845;
    }

    form{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 327px;
        margin-top: 42px;
    }

    label{
        font-size: 18px;
        color: #293845;
        margin-bottom: 3px;
    }

    input{
        max-width: 327px;
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 10px;
        padding-left: 18px;
        ::placeholder{
            font-size: 18px;
            font-style: italic;
            color: #AFAFAF;
        }
    }

    button{
        width: 225px;
        height: 43px;
        background-color: #E8833A;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        color: #fff;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        margin: 47px auto 20px auto;
    }

    a{
        text-decoration: none;
    }
`

export const Seats = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    max-width: 327px;
    min-height: 251px;
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
max-width: 327px;
margin: 0 auto;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    span{
        font-size: 13px;
        color: #4E5A65;
    }

    div{
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
}
`

export const Selected = styled.div`
background-color: #8DD7CF;
border: 1px solid #45BDB0;
`

export const Available = styled.div`
background-color: #C3CFD9;
border: 1px solid #808F9D;
`

export const NotAvailable = styled.div`
background-color: #FBE192;
border: 1px solid #F7C52B;
`