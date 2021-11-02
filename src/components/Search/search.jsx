import React from 'react';
import { PLACEHOLDER_SEARCH } from '../../constants';
import * as S from './style-search'
import { theme } from '../../styles/theme'

function search() {
    return (
        <S.Search>
            <S.Input type="text" placeholder={PLACEHOLDER_SEARCH} theme={theme} />
        </S.Search>
    );
}

export default search;
