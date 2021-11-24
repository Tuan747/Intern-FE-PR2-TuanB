import styled from "styled-components";
import { device } from "../../styles/theme"

export const Img = styled.img`
    object-fit: cover;

    @media ${device.mobile} {
        width: 50%;
        margin: 0 auto;
        display: block;
    }

    @media ${device.tablet} {
        width: 50%;
        margin: 0 auto;
        display: block;
    }
`;
