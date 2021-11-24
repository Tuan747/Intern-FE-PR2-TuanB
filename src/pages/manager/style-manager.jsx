import styled from "styled-components";
import { device } from "../../styles/theme"

export const Admin = styled.div`
    background: ${props => props.theme.bg_available_seat};
    padding: 30px;

    @media ${device.mobile} {
        padding: 0;
    }
`;

export const TabContent = styled.ul`
    background: ${props => props.theme.bg_main};
    color: ${props => props.theme.text_white};
    border-radius: 15px;
    overflow: hidden;
    
    @media ${device.mobile} {
        ${props => props.theme.dFlex('center', 'center', 'none')};
        border-radius: 5px;
        margin: 5px 0;
    }

    .admin__tab-active {
        background: ${props => props.theme.bg_yellow};
        color: ${props => props.theme.text_black};
        font-weight: 700;
    }
`;

export const TabItem = styled.li`
    font-size: ${props => props.theme.size_text_l};
    padding: 20px 30px;
    transition: ease-in-out .3s;
    cursor: pointer;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
        padding: 10px 5px;
        width: 25%;
        text-align: center;
    }

    svg {
        margin-right: 20px;

        @media ${device.mobile} {
            margin-right: 0;
    }
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

    @media ${device.mobile} {
        border-radius: 5px;
    }

    th, td {
        text-align: center;
    }

    @media ${device.mobile} {
        table {
            border-collapse: collapse;
            margin: 0;
            padding: 0;
            width: 100%;
            table-layout: fixed;

                thead {
                    display: none;
                }

                tr {
                    display: block;
                    margin-bottom: 5px;
                }

                td {
                    display: block;
                    font-size: 10px;
                    text-align: right;

                    &::before {
                        content: attr(data-label);
                        float: left;
                        font-weight: bold;
                        text-transform: uppercase;
                    }

                    &:last-child {
                        border-bottom: 0;
                    }
                }
        }
    }
    
    h1 {
        font-size: ${props => props.theme.size_text_4xl};
        text-align: center;
        margin-bottom: 20px;

        @media ${device.mobile} {
            font-size: ${props => props.theme.size_text_l};
        }
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
        background: ${props => props.theme.bg_hover};
        width: 100%;
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

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
        padding: 5px;
        border-radius: 10px;
    }
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

    @media ${device.mobile} {
        ${props => props.theme.dFlex('center', 'center', 'none')}
        width: 20px;
        height: 20px;
    }
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

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
        width: auto;
    }

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
