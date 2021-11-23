import styled from "styled-components";
import { device } from "../../styles/theme"

export const Types = styled.div`
    ${props => props.theme.dFlex('center', 'center', 'none')};
    margin: 20px 0;
    @media ${device.mobile} {
        margin: 0;
    }
`;

export const TypeSelect = styled.div`
    margin-left: ${props => props.left};
    border-radius: ${props => props.border};
    z-index: ${props => props.zIndex};
    background: ${props => props.theme.bg_orange};
    font-size: ${props => props.theme.size_text_4xl};
    font-weight: 700;
    box-shadow: 10px 0 ${props => props.theme.shadow_black_fading};
    color: ${props => props.theme.text_white};
    overflow: hidden;
    transition: ease-in-out 0.5s;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_l};
        ${props => props.theme.dFlex('center', 'center', 'none')};
        height: 80%;
    }

    a {
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        width: 420px;
        height: 85px;

        @media ${device.mobile} {
            margin-left: ${props => props.leftResponsive};
            width: 22rem;
            height: 4rem;
        }
    }

    .actives {
        background: ${props => props.theme.bg_yellow};
        color: ${props => props.theme.text_black} !important;
    }

    &:hover {
        background: ${props => props.theme.bg_yellow};
        color: ${props => props.theme.text_black};
    }
`;

export const Movie = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 20px;
    background: ${props => props.theme.bg_main_fading};
    color: ${props => props.theme.text_white};
    font-size: 16px;

    @media ${device.mobile} {
        flex-direction: column;
        padding: 5px;
        height: 18rem;
        overflow: hidden;
    }
`;

export const Image = styled.img`
    margin-right: 20px;
    height: 476px;
    min-width: 50%;
    flex: 1;
    box-shadow: 5px 5px 0 ${props => props.theme.shadow_black_img};
    border: 5px solid ${props => props.theme.border_img};

    @media ${device.mobile} {
        height: 200px;
        border: none;
        margin-right: 0;
    }
`;

export const Content = styled.div`
    flex: 1;
    position: relative;
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.size_text_3xl};
    text-transform: uppercase;
    line-height: 30px;
    color: ${props => props.theme.text_white};
    text-align: left;
    margin-bottom: 10px;

    @media ${device.mobile} {
        font-size: 10px;
        line-height: none;
        text-align: center;
        margin: 10px 0;
        height: 30px;
        overflow: hidden;
    }
`;

export const Desc = styled.div`
    margin-bottom: 30px;
    max-height: 170px;
    overflow: hidden;
`;

export const Rating = styled.div`
    padding-top: 20px;
    border-top: 1px dotted ${props => props.theme.border_white};
`;

export const Control = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);

    @media ${device.mobile} {
        width: 100%;
    }
`;

export const BtnControl = styled.a`
    ${props => props.theme.dFlex('center', 'center', 'none')};
    border-radius: ${props => props.border};
    background: ${props => props.bg};
    margin-left: ${props => props.left};
    width: 150px;
    height: 50px;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
        margin-left: ${props => props.leftResponsive};
        border-radius: ${props => props.borderResponsive};
        width: 100%;
        height: 30px;
    }
`;
