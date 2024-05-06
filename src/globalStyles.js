import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .html {
        font-size: 62.5%;
    }

    body {
        font-family: "Libre Baskerville", serif;
        background-color: #f8f8f8;
    }

    .container {
        max-width: 1200px;
        width: 90%;
        margin: auto;
    }
      


`;

export default GlobalStyles;
