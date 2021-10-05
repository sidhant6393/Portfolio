import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@400;700&display=swap');
    
        
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Jaldi', sans-serif; */
        font-family: "Yusei Magic", sans-serif;

        
        /* Disable text Selection */
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

    }

    body{
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    button{
        background: none;
        border: none;
        font-family: 'Jaldi', sans-serif;
        cursor: pointer;

    }

`;
