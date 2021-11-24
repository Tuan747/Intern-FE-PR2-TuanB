import styled from "styled-components";
import { device } from '../../styles/theme'

export const Navbar = styled.div`
    ${props => props.theme.dFlex('center', 'flex-end', 'none')};
    height: 50%;
    padding: 2px;
    border: 1px solid #e00d7a;
    border-radius: 30px;
    overflow: hidden;
`;

export const UlNav = styled.ul`
    ${props => props.theme.dFlex('center', 'space-around', 'none')};
    height: 100%;
    width: 100%;
    margin-bottom: 0px;
    padding-left: 0px;
    background: #e00d7a;
    border-radius: 30px;
    overflow: hidden;
`;

export const LiNav = styled.li`
    color: ${props => props.theme.text_white};
    font-size: ${props => props.theme.size_text_xl};
    height: 100%;
    width: 100%;
    font-weight: 400;
    transition: ease-in-out .2s;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
        margin: 10px 0;
    }
    
    a {
        ${props => props.theme.dFlex('center', 'center', 'none')};
        width: 100%;
        height: 100%;
    }

    .checked {
        background: ${props => props.theme.bg_yellow};
        font-weight: 700;
    }

    &:hover {
        background: ${props => props.theme.bg_yellow};
        font-weight: 700;
    }


`;
