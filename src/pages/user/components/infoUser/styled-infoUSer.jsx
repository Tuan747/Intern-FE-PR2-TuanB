import styled from 'styled-components';

export const TabChange = styled.div`
    height: 50px;
    margin-top: 40px;
    margin-bottom: 2px;
`;

export const TabChangeContent = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    li {
        width: 25%;
        text-align: center;
        height: 100%;
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
        font-weight: 700;
        transition: ease-in-out .4s;
        background: #f18720;
        color: white;

        &:hover {
            background: #fecf06;
            color: black;
        }

        &:nth-child(1) {
            z-index: 2;
            border-radius: 30px 50px 50px 0;
            box-shadow: 10px 0 0 rgba(0,0,0,.1);
        }

        &:nth-child(2) {
            z-index: 1;
            border-radius: 0 15px 0 0;
            margin-left: -25px;
        }
    }

    .active {
        background: #fecf06;
        color: black;
    }
`;

export const TabItem = styled.div`
    padding: 10px;
    background: #fecf06;
    border-radius: 5px;
    
    span {
        display: block; 
        text-align: center;
    }

    img {
        display: block;
        margin: 0 auto;
        border-radius: 50%;
    }

    div {
        margin: 25px 0px;
    }

    button {
        padding: 12px 30px;
        border-radius: 20px 0 20px 0;
        background: #fff;
        transition: ease-in-out .3s;

        &:hover {
            background: #dfdcdc;
        }
    }
`;

