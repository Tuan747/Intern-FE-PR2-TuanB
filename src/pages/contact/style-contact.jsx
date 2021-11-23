import styled from "styled-components";
import { device } from '../../styles/theme'

export const Contact = styled.div`
    text-align: center;
    color: ${props => props.theme.text_white};
    font-size: ${props => props.theme.size_text_2xl};
    background: url(${props => props.url});
    font-weight: 700;
    margin: 20px 0;
    padding: 50px;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
        padding: 20px;
        margin: 0;
    }

    h1 {
        font-size: ${props => props.theme.size_text_3xl};
        font-weight: 700;

        @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
    }
    }

    p, a {
        padding: 20px;

        @media ${device.mobile} {
            padding: 10px;
        }
    }
`;
