import styled from "styled-components";

export const ItemPromotion = styled.div`
    background: ${props => props.theme.bg_yellow};
    padding: 1rem 2rem;
    margin: 2rem 0;
    border-radius: 4px;

    button {
        padding : 20px;
        border-radius: 20px;
    }
`;

export const ImgPromotion = styled.div`
    border-radius: 50%;
    background: ${props => props.theme.bg_orange};
    text-align: center;
    padding: 1.6rem;
    width: 65%;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const ItemContent = styled.div`
    h1, div {
        margin: 10px 0;
    }

    span {
        color: ${props => props.theme.text_Gift};
        background: ${props => props.theme.bg_hover};
        padding: 3px 22px;
        border-radius: 25px;
        font-size: ${props => props.theme.size_text_xl};
        margin: 10px 0;

        svg {
            margin-left: .4rem;
        }
    }
`;
