import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none !important;
        color: inherit !important;
    }

    ul {
        list-style-type: none !important;
        padding-left: 0px;
        margin-bottom: 0px;
    }

    input {
        border: none;
        outline: none;
    }

    h1, h2 {
        margin: 0;
    }
`;

export default GlobalStyles
