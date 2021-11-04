import React from 'react';
import * as S from './style-loading'
import { theme } from '../../styles/theme'
import { useSelector } from 'react-redux';

function Loading() {
    const { isLoading } = useSelector((state) => state.loading)
    console.log(isLoading);

    return (
        <S.OverlayContainer style={{ display: isLoading ? 'block' : 'none' }}>
            <S.Loading theme={theme}>
                <div></div>
            </S.Loading>
        </S.OverlayContainer>
    );
}

export default Loading;