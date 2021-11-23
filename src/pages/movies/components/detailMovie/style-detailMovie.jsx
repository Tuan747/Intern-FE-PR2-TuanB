import styled from "styled-components";
import { device } from '../../../../styles/theme'

export const Detail = styled.div`
    background: url('https://cinestar.com.vn/catalog/view/theme/default/images/film-bg.jpg') no-repeat center top;
    margin-top: 20px;
    background-size: cover;
    padding: 20px;
`;

export const ItemMovie = styled.div`
    position: relative;
    height: 100%;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
    }
`;

export const Image = styled.img`
    box-shadow: 5px 5px 0 ${props => props.theme.shadow_black_img};
    border: 5px solid ${props => props.theme.border_img};
    margin-right: 20px;
    height: 50rem;
    min-width: 90%;

    @media ${device.mobile} {
        height: 20rem;
        margin: 0 auto;
        display: block;
    }
`;

export const Title = styled.h1`
    font-size: ${props => props.theme.size_text_4xl};
    color: ${props => props.theme.text_white};
    font-weight: 700;
    text-transform: uppercase;
    line-height: 30px;
    text-align: left;
    margin-bottom: 30px;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_xl};
        text-align: center;
    }
`;

export const Info = styled.div`
    ${props => props.theme.dFlex('center', 'flex-start', 'none')}
    margin-top: 30px;

    @media ${device.mobile} {
        justify-content: space-between
    }
`;

export const InfoTitle = styled.h2`
    color: ${props => props.theme.text_white};
    font-size: 18px;
    width: 110px;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_l};
    }
`;

export const InfoContent = styled.div`
    background: ${props => props.theme.bg_white};
    padding: 12px 30px;
    border-radius: 20px 0 20px 0;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_l};
        padding: 7px 10px;
    }
`;

export const Desc = styled.div`
    color: ${props => props.theme.text_white};
    margin-top: 30px;
`;

export const Rating = styled.span`
    color: ${props => props.theme.text_white};

    svg {
        margin-right: 10px;
    }
`;

export const BtnTicket = styled.div`
    ${props => props.theme.dFlex('center', 'center', 'none')};
    border-radius: ${props => props.border};
    background: ${props => props.bg};
    position: absolute;
    bottom: 0;
    width: 150px;
    height: 50px;
    transition: ease-in-out .3s;
    font-weight: 500;

    &:hover {
        background: ${props => props.theme.bg_white};
        color: ${props => props.theme.text_orange} !important; 
    }

    @media ${device.mobile} {
        position: static;
        margin-top: 30px;
        width: 100%;
        height: 46px;
    }
`;
