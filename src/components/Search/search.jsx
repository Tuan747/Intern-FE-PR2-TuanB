import React from 'react';
import { PLACEHOLDER_SEARCH } from '../../constants';
import * as S from './style-search'
import { theme } from '../../styles/theme'
import { useDispatch } from 'react-redux';
import { getValue } from './searchSlice';
import { useHistory } from 'react-router';

function Search() {
    const dispatch = useDispatch()
    const history = useHistory()
    let delayTimer

    const handleGetValueChange = (e) => {
        clearTimeout(delayTimer);
        delayTimer = setTimeout(() => {
            if (e.target.value !== '') {
                dispatch(getValue(e.target.value))
                history.replace('/search')
            }
        }, 500)
    }

    return (
        <S.Search>
            <S.Input
                type="text"
                placeholder={PLACEHOLDER_SEARCH}
                theme={theme}
                onChange={handleGetValueChange}
            />
        </S.Search>
    );
}

export default Search;
