import styled from "styled-components";

export const Contact = styled.div`
    text-align: center;
    color: ${props => props.theme.text_white};
    font-size: ${props => props.theme.size_text_2xl};
    font-weight: 700;
    margin: 20px 0;
    padding: 50px;
    background: url(${props => props.url});

    h1 {
        font-size: ${props => props.theme.size_text_3xl};
        font-weight: 700;
    }

    p, a {
        padding: 20px;
    }
`;
