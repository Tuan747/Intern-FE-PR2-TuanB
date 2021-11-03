import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import * as S from './style-header'
import logo from "./../../resourses/img/logo.png";
import Search from '../../components/Search/search';
import Navbar from '../../components/NavBar/navbar';
import Carousel from '../../components/Carousel/carousel';

function Header() {
    return (<>
        <Container >
            <Row>
                <Col lg={6}>
                    <S.Img src={logo} alt="Logo" />
                </Col>
                <Col lg={6}>
                    <Search />
                    <Navbar />
                </Col>
            </Row>
        </Container>
        <Carousel />
    </>);
}

export default Header;
