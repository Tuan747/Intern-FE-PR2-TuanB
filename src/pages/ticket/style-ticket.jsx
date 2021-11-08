import styled from "styled-components";

export const TimeMovie = styled.div`
    background: ${props => props.theme.bg_yellow};
    padding: 20px;

    .dropdown-toggle {
        width: 100%;
        border-radius: 30px 0px 30px 0px;
        background: ${props => props.theme.bg_main_fading};
        transition: ease-in-out .2s;

        &:hover {
            background: ${props => props.theme.bg_main};
        }
    }
    .dropdown-menu {
        width: 100%;
        background: ${props => props.theme.bg_hover};
        padding: 0;
        
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
    width: 100%;
    border: 9px solid ${props => props.theme.border_orange};
`;

export const Title = styled.h1`
    margin-bottom: 20px;
`;
