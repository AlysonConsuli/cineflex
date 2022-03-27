import styled from "styled-components";

export const $Movies = styled.div`

    h1{
        font-size: 24px;
        margin: 43px auto;
        text-align: center;
        color: #293845;
    }

    img{
        width: 129px;
        height: 193px;
        position: absolute;
    }

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;

        div{
            width: 145px;
            height: 209px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
        }
    }
`