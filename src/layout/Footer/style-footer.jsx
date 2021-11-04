import styled from "styled-components";

export const CopyRight = styled.div`
    padding: 24px 20px;
    background: ${props => props.theme.bg_black};
    left: 0;
    bottom: 0;
    width: 100%;
    color: ${props => props.theme.text_white};
    text-align: center;
    p {
        font-weight: 100;
        font-size: ${props => props.theme.size_text_l};
        text-transform: uppercase;
        a {
            img {
                width: 10%;
            }
        }
    }
`;
