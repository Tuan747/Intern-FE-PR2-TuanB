import styled from 'styled-components';

export const Pagination = styled.ul`
    ${props => props.theme.dFlex('center', 'center', 'none')};
    
    .page-item.active .page-link {
        color: ${props => props.theme.text_white} !important;
        background: ${props => props.theme.bg_main_fading} !important;
    }

    button {
        ${props => props.theme.dFlex('center', 'center', 'none')};
        border-radius: 100% !important;
        margin-left: 10px !important;
        width: 30px;
        height: 30px;
        transition: ease-in-out .3s;
        border: none !important;

        &:hover {
            background: ${props => props.theme.bg_main_fading};
            color: ${props => props.theme.text_white};
        }
    }
`;
