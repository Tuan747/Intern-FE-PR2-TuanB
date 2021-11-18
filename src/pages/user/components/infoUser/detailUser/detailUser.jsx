import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { AUTHORS, TAB_INFO_USER } from '../../../../../constants';
import { theme } from '../../../../../styles/theme';
import * as F from '../styled-infoUSer'
import * as D from '../../../../movies/components/detailMovie/style-detailMovie'

function DetailUser({ tab }) {
    return (
        <Container style={{ display: tab === TAB_INFO_USER ? 'block' : 'none' }}>
            <F.TabItem>
                <Row>
                    <Col lg={6} >
                        <img src="https://naht-cinema-api.herokuapp.com/src/resoures/defaulavartar.png" alt="avarta" />
                        <span>admin@gmail.com</span>
                    </Col>
                    <Col lg={6}>
                        <h1>{AUTHORS.detail_user.title}</h1>
                        <D.Info theme={theme}>
                            <D.InfoTitle theme={theme}>{AUTHORS.detail_user.email}</D.InfoTitle>
                            <D.InfoContent theme={theme}>admin@gmail.com</D.InfoContent>
                        </D.Info>
                        <D.Info theme={theme}>
                            <D.InfoTitle theme={theme}>{AUTHORS.detail_user.birthday}</D.InfoTitle>
                            <D.InfoContent theme={theme}>17/11/2021</D.InfoContent>
                        </D.Info>
                        <D.Info theme={theme}>
                            <D.InfoTitle theme={theme}>{AUTHORS.detail_user.point}</D.InfoTitle>
                            <D.InfoContent theme={theme}>0</D.InfoContent>
                        </D.Info>
                        <button>{AUTHORS.detail_user.btn_edit}</button>
                    </Col>
                </Row>
            </F.TabItem>
        </Container>
    );
}

export default DetailUser;
