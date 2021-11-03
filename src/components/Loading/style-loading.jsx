import styled from "styled-components";

export const Loading = styled.div`
    display: inline-block;
    transform: translateZ(1px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;

    div {
        display: inline-block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        background: ${props => props.theme.bg_white};
        animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    @keyframes lds-circle {
        0%, 100% {
            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
        }
        0% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(1800deg);
            animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
        }
        100% {
            transform: rotateY(3600deg);
        }
    }
`;

export const OverlayContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: #5b085a79;
    position: fixed;
    z-index: 99;
`;
