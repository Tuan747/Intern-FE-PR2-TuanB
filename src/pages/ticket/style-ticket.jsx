import styled from "styled-components";
import { device } from "../../styles/theme"

export const TimeMovie = styled.div`
    background: ${props => props.theme.bg_yellow};
    padding: 20px;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
    }

    .dropdown-toggle {
        background: ${props => props.theme.bg_main_fading};
        border-radius: 30px 0px 30px 0px;
        transition: ease-in-out .2s;
        margin-bottom: 25px;
        width: 100%;

        &:hover {
            background: ${props => props.theme.bg_main};
        }

        @media ${device.mobile} {
            font-size: ${props => props.theme.size_text_m};
        }
    }
    .dropdown-menu {
        background: ${props => props.theme.bg_hover};
        width: 100%;
        padding: 0;

        @media ${device.mobile} {
            font-size: ${props => props.theme.size_text_m};
        }
        
        .dropdown-item {
            transition: ease-in-out .2s;
            &:hover {
                color: ${props => props.theme.text_white};
                background: ${props => props.theme.bg_main_fading};
            }
        }
    }
`;

export const Image = styled.img`
    border: 9px solid ${props => props.theme.border_orange};
    width: 100%;
`;

export const Title = styled.h1`
    margin-bottom: 20px;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_xl};
        margin: 10px;
    }
`;
