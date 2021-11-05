import styled from 'styled-components'

export const FormLogin = styled.div`
    position: absolute;
    top: 100%;
    z-index: 9;
    height: 20rem;
    background: ${props => props.theme.bg_white};
    border-radius: 5%;
    padding: 20px;
    border: 1px solid ${props => props.theme.border_yellow};
    width: 100%;

    h5 {
        text-align: center;
        font-size: ${props => props.theme.size_text_xl};
        margin: 10px 0;
        color: ${props => props.theme.text_error};
    }
`;

export const FormInput = styled.form`
    height: 100%;
    ${props => props.theme.dFlex("none", "center", "column")};

    h1 {
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
