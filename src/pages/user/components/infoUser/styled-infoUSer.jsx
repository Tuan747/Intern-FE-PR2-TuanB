import styled from 'styled-components';
import { device } from '../../../../styles/theme';

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
        background: ${props => props.theme.bg_orange};
        color: ${props => props.theme.text_white};
        width: 25%;
        text-align: center;
        height: 100%;
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
        font-weight: 700;
        transition: ease-in-out .4s;

        &:hover {
            background: ${props => props.theme.bg_yellow};
            color: ${props => props.theme.text_black};
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

        @media ${device.mobile} {
            font-size: ${props => props.theme.size_text_m};
            width: 50%;
        }

        @media ${device.tablet} {
            font-size: ${props => props.theme.size_text_l};
            width: 50%;
        }
    }

    .active {
        background: ${props => props.theme.bg_yellow};
        color: ${props => props.theme.text_black};
    }
`;

export const TabItem = styled.div`
    background: ${props => props.theme.bg_yellow};
    padding: 10px;
    border-radius: 5px;

    @media ${device.mobile} {
        font-size: ${props => props.theme.size_text_m};
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

                td, th {
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

    @media ${device.tablet} {
        font-size: ${props => props.theme.size_text_l};
    }
    
    span {
        display: block; 
        text-align: center;
    }

    img {
        display: block;
        margin: 0 auto;
        border-radius: 50%;

        @media ${device.mobile} {
            width: 60%;
        }
    }

    div {
        margin: 25px 0px;

        @media ${device.mobile} {
            margin: 5px;
        }
    }

    button {
        background: ${props => props.theme.bg_white};
        padding: 12px 30px;
        border-radius: 20px 0 20px 0;
        transition: ease-in-out .3s;

        @media ${device.mobile} {
            font-size: ${props => props.theme.size_text_l};
            padding: 12px 15px;
            width: 100%;
        }

        @media ${device.tablet} {
            font-size: ${props => props.theme.size_text_l};
            padding: 5px 10px;
            width: 100%;
        }

        &:hover {
            background: ${props => props.theme.bg_white_fading};
        }
    }

    .item__history {
        position: relative;
        left: 0px;
        transition: ease-in-out .3s;

        &--detail {
            background: ${props => props.theme.bg_orange};
            display: none;
            position: absolute;
            width: 13rem;
            height: 20rem;
            border-radius: 10px;
            padding: 25px;
            transition: ease-in-out .3s;

            @media ${device.mobile} {
                z-index: 1;
                padding: 10px;
                height: auto;
                text-align: center;
            }

            @media ${device.tablet} {
                z-index: 1;
                padding: 10px;
                height: auto;
                text-align: center;
                right: 0;
            }
        }

        .seat {
            display: inline-block;
        }

        &:hover {
            left: 10px;
        }

        &:hover > .item__history--detail{
            display: block;
        }
    }
`;
