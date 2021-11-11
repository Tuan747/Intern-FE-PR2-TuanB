import styled from "styled-components";

export const ManagerUser = styled.div`
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
