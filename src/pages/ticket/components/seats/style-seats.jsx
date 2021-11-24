import styled from "styled-components";
import { device } from '../../../../styles/theme'

export const SeatContainer = styled.div`
    .seat-available {
        background: ${props => props.theme.bg_available_seat};
    }

    .seat-disabled {
        background: ${props => props.theme.bg_disabled_seat};
        pointer-events: none;
    }

    .seat-selected {
        background: ${props => props.theme.bg_selected_seat};
    }
`;

export const SeatSelect = styled.div`
    box-shadow: 1px 1px 0px 0px ${props => props.theme.shadow_black_img};
    font-size: ${props => props.theme.size_text_l};
    color: ${props => props.theme.text_white};
    margin: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: ease-in-out .2s;
    text-align: center;
    line-height: 30px;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.bg_main_fading};
    }

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
        width: 100%;
        height: 100%;
        margin: 0;
    }
`;

export const Desc = styled.div`
    margin: 25px 0;
    background: #F18720;
    border: 5px solid #7C2665;
    width: 100%;
    padding: 20px;
    border-radius: 20px;

    @media ${device.mobile} {
        border: 2px solid #7C2665;
    }
`;

export const DescBox = styled.span`
    display: inline-block; 
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.bg};
`;

export const DescText = styled.div`
    font-size: ${props => props.theme.size_text_xl};

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m}
    }
`;
