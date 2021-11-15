import styled from 'styled-components';

export const ManagerMovies = styled.div`
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
