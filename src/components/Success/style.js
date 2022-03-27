import styled from "styled-components";

export const LastPage = styled.div`
display: flex;
flex-direction: column;

h1{
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #247A6B;
    max-width: 180px;
    margin: 30px auto 0 auto;
}

h2{
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    margin-bottom: 10px;
    margin-top: 40px;
    margin-left: 29px;
}

span{
    font-size: 22px;
    color: #293845;
    margin-left: 29px;
    margin-bottom: 5px;
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
    margin: 50px auto 0 auto;
}

a{
    text-decoration: none;
}
`