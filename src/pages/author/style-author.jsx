import styled from "styled-components";
import { device } from "../../styles/theme"

export const Author = styled.div`
    height: 81px;
    padding: 10px 0;
    margin-top: 20px;
    background: url("https://cinestar.com.vn/catalog/view/theme/default/images/pattern.png");

    @media ${device.mobile} {
        height: auto;
        padding: 5px 0;
    }

    @media ${device.tablet} {
        height: auto;
        padding: 10px 0;
        margin-top: 75px;
    }
`;

export const Phone = styled.div`
    ${props => props.theme.dFlex('center', 'flex-end', 'none')}

    img {
        @media ${device.tablet} {
            width: 20%;
        }
    }

    a {
        font-size: ${props => props.theme.size_text_4xl};
        color: ${props => props.theme.text_orange} !important;
        text-transform: uppercase;
        font-weight: 700;
        transition: ease-in-out .3s;

        @media ${device.tablet} {
            font-size: ${props => props.theme.size_text_xl};
        }

        &:hover {
            color: ${props => props.theme.text_main} !important;
        }
    }
`;

export const BtnAuthor = styled.div`
    ${props => props.theme.dFlex('center', 'flex-start', 'none')};
    cursor: pointer;
    position: relative;

    @media ${device.mobile} {
        justify-content: center
    }

    img {
        @media ${device.mobile} {
            width: 20%;
        }

        @media ${device.tablet} {
            width: 20%;
        }
    }

    span {
        font-size: ${props => props.theme.size_text_xl};
        color: ${props => props.theme.text_main};
        margin-left: 15px;
        text-transform: uppercase;
        font-weight: 700;
        transition: ease-in-out .3s;

        @media ${device.mobile} {
            font-size: 9px;
            margin-left: 5px;
        }

        @media ${device.tablet} {
            font-size: ${props => props.theme.size_text_l};
            margin-left: 5px;
        }

        &:hover {
            color: ${props => props.theme.text_orange};
        }
    }
`;

export const ModalItem = styled.div`
    margin-top: 20px;
    h5 {
        color: ${props => props.theme.text_orange};
        font-size: 16px;
    }
    input {
        font-size: 16px;
        width: 100%;
        padding: 5px 10px 5px 10px;
        height: 40px;
        border-radius: 10px;
    }
    span {
        color: ${props => props.theme.text_error};
    }
    
    select {
        border-radius: 20px;
        padding: 10px;
    }
`;

export const FormInput = styled.form`
    ${props => props.theme.dFlex("none", "center", "column")};
    height: 100%;

    h5 {
        color: ${props => props.theme.text_orange};
        text-align: center;
        font-size: 25px;
    }

    input {
        border: 1px solid ${props => props.theme.border_form};
        margin: 15px 0 5px 0;
        padding: 10px;
        border-radius: 10px;
        transition: ease-in-out .2s;

        &:hover {
            box-shadow: 0 0 5px ${props => props.theme.shadow_yellow};
        }
    }
`;

export const ErrorMessage = styled.div`
    color: ${props => props.theme.text_error};
    font-size: ${props => props.theme.size_text_l};
    margin-left: 5px;
`;
