import styled from "styled-components";
import { device } from '../../styles/theme'

export const Avatar = styled.div`
    font-size: ${props => props.theme.size_text_xl};
    position: relative;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
    }

    img {
        background: ${props => props.theme.bg_yellow};
        width: 59px;
        height: 59px;
        border-radius: 100%;

        @media ${device.mobile} {
            width: 40px;
            height: 40px;
        }
    }

    .name__user {
        margin-left: 10px;
    }

    &:hover > ul{
        display: block;
    }

`;

export const Option = styled.ul`
    color: ${props => props.theme.text_white};
    background: ${props => props.theme.bg_main_fading};
    display: none;
    z-index: 999;
    width: 200px;
    position: absolute;
    top: 100%;
    border-radius: 5px;
    padding: 10px;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
        width: 40%;
    }
    
    li {
        padding: 10px 0;
        transition: ease-in-out .1s;
        
        &:hover {
            font-weight: 700
        }
    }
`;
