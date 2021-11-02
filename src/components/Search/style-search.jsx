import styled from "styled-components";

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50%;
`;

export const Input = styled.input`
    border-radius: 20px;
    padding-left: 15px;
    color: ${props => props.theme.text_gray};
    background-color: ${props => props.theme.bg_black_fading};
    height: 65%;
`;
