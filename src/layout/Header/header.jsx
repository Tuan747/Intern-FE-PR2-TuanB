import React from 'react';
import { Col, Row } from 'reactstrap';
import * as S from './style-header'
import logo from "./../../resourses/img/logo.png";
import Search from '../../components/Search/search';
import Navbar from '../../components/NavBar/navbar';

function Header() {
    return (
        <Row>
            <Col lg={6}>
                <S.Img src={logo} alt="Logo" />
            </Col>
            <Col lg={6}>
                <Search />
                <Navbar />
            </Col>
        </Row>
    );
}

export default Header;
