import styled from "styled-components";

export const MovieTime = styled.div`

    h1{
        font-size: 24px;
        margin: 43px auto;
        text-align: center;
        color: #293845;
    }

    footer{
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

        div{
            width: 64px;
            height: 89px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
        }

        img{
            width: 48px;
            height: 72px;
        }

    }
`

export const Times = styled.div`

    margin-left: 24px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    span{
        font-size: 20px;
        color: #293845;
    }

    div{
        display: flex;
        gap: 8px;
    }

    button{
        width: 83px;
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
    }

    a{
        text-decoration: none;
    }
`