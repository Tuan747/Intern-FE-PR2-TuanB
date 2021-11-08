import styled from "styled-components";

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
    margin: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: ease-in-out .2s;
    color: ${props => props.theme.text_white};
    text-align: center;
    line-height: 30px;
    font-size: ${props => props.theme.size_text_l};
    cursor: pointer;
    box-shadow: 1px 1px 0px 0px ${props => props.theme.shadow_black_img};

    &:hover {
        background: ${props => props.theme.bg_main_fading};
    }
`;
