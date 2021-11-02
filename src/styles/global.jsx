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
    }

    input {
        border: none;
        outline: none;
    }
`;

export default GlobalStyles
