import styled from "styled-components";

export const Admin = styled.div`
    background: ${props => props.theme.bg_available_seat};
    padding: 30px;
`;

export const TabContent = styled.ul`
    background: ${props => props.theme.bg_main};
    color: ${props => props.theme.text_white};
    border-radius: 15px;
    overflow: hidden;

    .admin__tab-active {
        background: ${props => props.theme.bg_yellow};
        color: ${props => props.theme.text_black};
        font-weight: 700;
    }
`;

export const TabItem = styled.li`
    padding: 20px 30px;
    transition: ease-in-out .3s;
    font-size: ${props => props.theme.size_text_l};
    cursor: pointer;

    svg {
        margin-right: 20px;
    }
    
    &:hover {
        background: ${props => props.theme.bg_yellow};
        color: ${props => props.theme.text_black};
        font-weight: 700;
    }
`;

export const ManagerBox = styled.div`
    color: ${props => props.theme.text_white};
    background: ${props => props.theme.bg_main};
    padding: 30px;
    border-radius: 15px;

    th, td {
        text-align: center;
    }

    h1 {
        font-size: ${props => props.theme.size_text_4xl};
        text-align: center;
        margin-bottom: 20px;
    }

    .dropdown-toggle {
        width: 100%;
        border-radius: 30px 0px 30px 0px;
        background: red;
        transition: ease-in-out .2s;
        margin-bottom: 25px;

        &:hover {
            background: ${props => props.theme.bg_main};
        }
    }
    .dropdown-menu {
        width: 100%;
        background: ${props => props.theme.bg_hover};
        padding: 0;
        
        .dropdown-item {
            transition: ease-in-out .2s;
            &:hover {
                color: ${props => props.theme.text_white};
                background: ${props => props.theme.bg_main_fading};
            }
        }
    }

    .select {
        position: relative;
        &:hover > .option {
            display: block;
        }
        .option {
            background: ${props => props.theme.bg_hover};
            position: absolute;
            width: 100%;
            padding: 10px;
            display: none;
            border-radius: 5px;
            z-index: 1;
        }
    }
`;

export const ContentBox = styled.div`
    background:${props => props.theme.bg_box_manager_user};
    font-size: ${props => props.theme.size_text_2xl};
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
`;

export const TitleBox = styled.div`
    text-align: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.bg_orange};
`;

export const NumberBox = styled.div`
    ${props => props.theme.dFlex('center', 'space-around', 'none')}
`;

export const Icon = styled.div`
    background: red;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    line-height: 40px;
    text-align: center;
`;

export const BtnDelete = styled.button`
    font-size: ${props => props.theme.size_text_l};
    width: 100%;
    border-radius: 22px;
    transition: ease-in-out .2s;
    
    &:not(:last-child) {
        margin-bottom: 5px;
    }

    &:hover {
        background: ${props => props.theme.bg_available_seat};
        color: ${props => props.theme.text_white};
    }
`;

export const Add = styled.div`
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

