import React from 'react';
import * as S from './style-contact'
import { theme } from '../../styles/theme'
import { CONTACT } from '../../constants';

function Contact() {
    return (<>
        <S.Contact
            theme={theme}
            url={'https://cinestar.com.vn/pictures/webimages/7LienHe/650x250.jpg'}
        >
            <h1>{CONTACT.line1}</h1>
            <p>{CONTACT.line2}</p>
            <p>{CONTACT.line3}</p>
            <p>{CONTACT.line4}</p>
            <a href="tel:028 7300 8881">{CONTACT.line5}</a>
        </S.Contact >
        <S.Contact
            theme={theme}
            url={'https://cinestar.com.vn/pictures/moi/6LienHe/Background/1.jpg'}
        >
            <h1>{CONTACT.line6}</h1>
            <p>{CONTACT.line7}</p>
            <a href="tel:+84 966 252 325">{CONTACT.line8}</a>
            <p>{CONTACT.line9}</p>
        </S.Contact >
    </>);
}

export default Contact;
