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

export const ModalItem = styled.div`
    margin-top: 20px;
    h5 {
        font-size: 16px;
        color: ${props => props.theme.text_orange};
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
    height: 100%;
    ${props => props.theme.dFlex("none", "center", "column")};

    h5 {
        text-align: center;
        font-size: 25px;
        color: ${props => props.theme.text_orange};
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
    font-size: 12px;
    color: ${props => props.theme.text_error};
    margin-left: 5px;
`;
