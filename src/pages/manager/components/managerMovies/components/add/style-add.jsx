import styled from 'styled-components';

export const AddMovies = styled.div`
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out .3s;
    width: 20%;
    margin: 0 auto 20px auto;

    &:hover {
        color: red;
    }

    span {
        margin-left: 10px;
    }
`;

export const Form = styled.form`
    background: ${props => props.theme.bg_black_fading};

    .modal-header {
        color: ${props => props.theme.text_orange}
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
