import styled from "styled-components";

export const Avatar = styled.div`
    position: relative;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;

    img {
        background: ${props => props.theme.bg_yellow};
        width: 59px;
        height: 59px;
        border-radius: 100%;
    }

    .name__user {
        margin-left: 10px;
    }

    &:hover > ul{
        display: block;
    }

`;

export const Option = styled.ul`
    display: none;
    z-index: 999;
    width: 200px;
    position: absolute;
    top: 100%;
    border-radius: 5px;
    color: ${props => props.theme.text_white};
    background: ${props => props.theme.bg_main_fading};
    padding: 10px;
    
    li {
        padding: 10px 0;
        transition: ease-in-out .1s;
        
        &:hover {
            font-weight: 700
        }
    }
`;
