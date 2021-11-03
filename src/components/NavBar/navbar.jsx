import React from 'react';
import * as S from './style-navbar'
import { theme } from '../../styles/theme'
import { NAVBAR_TITLE } from '../../constants';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <S.Navbar theme={theme}>
            <S.UlNav theme={theme}>
                <S.LiNav theme={theme}><NavLink activeClassName="checked" to="/phim">{NAVBAR_TITLE.movies}</NavLink></S.LiNav>
                <S.LiNav theme={theme}><NavLink activeClassName="checked" to="/lich">{NAVBAR_TITLE.schedule}</NavLink></S.LiNav>
                <S.LiNav theme={theme}><NavLink activeClassName="checked" to="/khuyenmai">{NAVBAR_TITLE.promotion}</NavLink></S.LiNav>
                <S.LiNav theme={theme}><NavLink activeClassName="checked" to="/tintuc">{NAVBAR_TITLE.news}</NavLink></S.LiNav>
                <S.LiNav theme={theme}><NavLink activeClassName="checked" to="/lienhe">{NAVBAR_TITLE.contact}</NavLink></S.LiNav>
            </S.UlNav>
        </S.Navbar>
    );
}

export default Navbar;
