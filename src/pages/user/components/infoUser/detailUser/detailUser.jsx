import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { AUTHORS, TAB_INFO_USER } from '../../../../../constants';
import { theme } from '../../../../../styles/theme';
import * as F from '../styled-infoUSer'
import * as D from '../../../../movies/components/detailMovie/style-detailMovie'
import { useSelector } from 'react-redux';
import avatar from '../../../../../resourses/img/avatar.png'

function DetailUser({ tab }) {
    const { dataUser } = useSelector((state) => state.author)
    const { email, date, point } = dataUser

    return (
        <Container style={{ display: tab === TAB_INFO_USER ? 'block' : 'none' }}>
            <F.TabItem>
                <Row>
                    <Col lg={6}>
                        <img src={avatar} alt="avatar" />
                        <span>{email}</span>
                    </Col>
                    <Col lg={6}>
                        <h1>{AUTHORS.detail_user.title}</h1>
                        <D.Info theme={theme}>
                            <D.InfoTitle theme={theme}>{AUTHORS.detail_user.email}</D.InfoTitle>
                            <D.InfoContent theme={theme}>{email}</D.InfoContent>
                        </D.Info>
                        <D.Info theme={theme}>
                            <D.InfoTitle theme={theme}>{AUTHORS.detail_user.birthday}</D.InfoTitle>
                            <D.InfoContent theme={theme}>{new Date(date).toLocaleDateString()}</D.InfoContent>
                        </D.Info>
                        <D.Info theme={theme}>
                            <D.InfoTitle theme={theme}>{AUTHORS.detail_user.point}</D.InfoTitle>
                            <D.InfoContent theme={theme}>{point}</D.InfoContent>
                        </D.Info>
                        <button>{AUTHORS.detail_user.btn_edit}</button>
                    </Col>
                </Row>
            </F.TabItem>
        </Container>
    );
}

export default DetailUser;
