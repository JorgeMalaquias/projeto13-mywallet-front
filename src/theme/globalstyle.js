import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }
    body{
        position:absolute;
        top:0;
        bottom:0;
        left: 0;
        right: 0;
        background-color: #8C11BE;
    }
    .root{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a{
        text-decoration: none;
    }

`


export default GlobalStyle;