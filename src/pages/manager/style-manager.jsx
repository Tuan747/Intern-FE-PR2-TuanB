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
