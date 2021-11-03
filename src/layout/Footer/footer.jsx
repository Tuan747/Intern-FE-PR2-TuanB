import React from 'react';
import { FOOTER } from '../../constants';
import BCT from "../../resourses/img/BCT.png"
import { theme } from '../../styles/theme';
import * as S from './style-footer'

function Footer() {
    return (
        <S.CopyRight theme={theme}>
            <p>
                <a href="http://online.gov.vn/Home/WebDetails/51398" target="blank">
                    <img src={BCT} alt="Footer" />
                </a>
            </p>
            <p>
                {FOOTER.line1}
                <br />
                {FOOTER.line2}
                <br />
                {FOOTER.line3}
                <br />
                {FOOTER.line4}<strong>{FOOTER.line5}</strong>{FOOTER.line6}
            </p>
        </S.CopyRight>
    );
}

export default Footer;
