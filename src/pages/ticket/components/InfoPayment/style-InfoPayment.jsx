import styled from "styled-components";
import { device } from '../../../../styles/theme'

export const InfoPayment = styled.div`
    background: ${props => props.theme.bg_main_fading};
    color: ${props => props.theme.text_white};
    border: 10px solid ${props => props.theme.bg_hover};
    border-radius: 20px;

    @media ${device.mobile} {
        border: 3px solid ${props => props.theme.bg_hover};
        border-radius: 5px;
    }

    h1 {
        border-bottom: 10px solid ${props => props.theme.bg_hover};
        font-size: ${props => props.theme.size_text_3xl};
        padding: 20px 0;

        @media ${device.mobile} {
            border-bottom: 3px solid ${props => props.theme.bg_hover};
            font-size: ${props => props.theme.size_text_xl};
        }
    }
`;

export const Content = styled.div`
    padding: 20px 0;
    border-bottom: 10px solid ${props => props.theme.bg_hover};

    @media ${device.mobile} {
        border-bottom: 3px solid ${props => props.theme.bg_hover};
    }

    h2 {
        font-size: ${props => props.theme.size_text_3xl};

        @media ${device.mobile} {
            font-size: ${props => props.theme.size_text_xl};
            margin-bottom: 10px;
        }
    }
`;

export const Time = styled.div`
    ${props => props.theme.dFlex('center', 'space-around', 'none')};
    font-size: ${props => props.theme.size_text_xl};
    margin-top: 10px;

    svg {
        margin-right: 5px;
    }

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
    }
`;

export const Seats = styled.div`
    border-bottom: 10px solid ${props => props.theme.bg_hover};
    padding: 20px 0;
    
    @media ${device.mobile} {
        border-bottom: 3px solid ${props => props.theme.bg_hover};
    }
    
    h2 {
        font-size: ${props => props.theme.size_text_3xl};
        margin-bottom: 5px;

        @media ${device.mobile} {
            font-size: ${props => props.theme.size_text_xl};
            margin-bottom: 10px;
        }
    }
`;

export const Price = styled.div`
    border-bottom: 10px solid ${props => props.theme.bg_hover};

    @media ${device.mobile} {
        border-bottom: 3px solid ${props => props.theme.bg_hover};
    }
`;

export const BoxItem = styled.div`
    ${props => props.theme.dFlex('center', 'space-between', 'none')};
    margin: 0 20px;
    padding: 10px;
`;

export const BtnByTicket = styled.button`
    width: 30%;
    height: 45px;
    border-radius: 20px;
    transition: ease-in-out .3s;
    margin-bottom: 20px;

    &:hover {
        background: ${props => props.theme.bg_hover};
        color: ${props => props.theme.text_white};
    }
`;

