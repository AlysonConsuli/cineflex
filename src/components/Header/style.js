import styled from "styled-components";

export const $Header = styled.header`

height: 67px;
background-color: #C3CFD9;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
left: 0;
top: 0;
z-index: 1;

img{
    position: absolute;
    left: 20px;
    cursor: pointer;
}

span{
    font-size: 34px;
    color: #E8833A;
}
`