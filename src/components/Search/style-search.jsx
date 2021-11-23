import styled from "styled-components";
import { device } from "../../styles/theme"

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50%;

    @media ${device.mobile} {
        margin: 5px 0;
        justify-content: center;
    }

`;

export const Input = styled.input`
    border-radius: 20px;
    padding-left: 15px;
    color: ${props => props.theme.text_gray};
    background-color: ${props => props.theme.bg_black_fading};
    height: 65%;

    @media ${device.mobile} {
        width: 50%;
        height: 100%;
        font-size: ${props => props.theme.size_text_m}
    }
`;
