import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Jaldi:wght@400;700&display=swap');

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jaldi', sans-serif;
    }

    body{
        overflow-x: hidden;
    }

`;
