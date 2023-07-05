import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,html{
        height: 100%;
        width: 100%;
        font-family: 'Nunito', sans-serif;
        background-color: #f5f5f5;

        font-size: 16px;
        color: #333;

    }

    // reseta inputs,butoes e links
    input, button, a{
        color: inherit;
        text-decoration: none;
        border: none;
        outline: none;
        font-family: 'Nunito', sans-serif;
        cursor: pointer;
    }        

    li{
        list-style: none;
    }

    .container{
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .link_active{
        color: #018762;
    }
        

`;
