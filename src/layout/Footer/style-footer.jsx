import styled from "styled-components";
import { device } from "../../styles/theme"

export const CopyRight = styled.div`
    padding: 24px 20px;
    background: ${props => props.theme.bg_black};
    left: 0;
    bottom: 0;
    width: 100%;
    color: ${props => props.theme.text_white};
    text-align: center;

    @media ${device.mobile} {
        padding: 10px;
    }

    p {
        font-weight: 100;
        font-size: ${props => props.theme.size_text_l};
        text-transform: uppercase;

        @media ${device.mobile} {
            font-size: ${props => props.theme.size_text_m};
        }
        a {
            display: block;
            img {
                width: 10%;
                @media ${device.mobile} {
                    width: 50%;
                }
            }
        }
    }
`;
