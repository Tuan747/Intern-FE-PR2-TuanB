import styled from "styled-components";

export const Author = styled.div`
    height: 81px;
    padding: 10px 0;
    margin-top: 20px;
    background: url("https://cinestar.com.vn/catalog/view/theme/default/images/pattern.png");
`;

export const Phone = styled.div`
    ${props => props.theme.dFlex('center', 'flex-end', 'none')}
    a {
        font-size: ${props => props.theme.size_text_4xl};
        text-transform: uppercase;
        color: ${props => props.theme.text_orange} !important;
        font-weight: 700;
        transition: ease-in-out .3s;

        &:hover {
            color: ${props => props.theme.text_main} !important;
        }
    }
`;

export const BtnAuthor = styled.div`
    ${props => props.theme.dFlex('center', 'flex-start', 'none')};
    cursor: pointer;
    position: relative;
    span {
        margin-left: 15px;
        font-size: ${props => props.theme.size_text_xl};
        text-transform: uppercase;
        color: ${props => props.theme.text_main};
        font-weight: 700;
        transition: ease-in-out .3s;

        &:hover {
            color: ${props => props.theme.text_orange};
        }
    }
`;
