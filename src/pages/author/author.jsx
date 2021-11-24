import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import iconCall from '../../resourses/img/icon-call.png'
import * as S from './style-author'
import { theme } from '../../styles/theme'
import { AUTHORS } from '../../constants';
import Login from './components/login/login';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './authorSlice';
import User from '../user/user';
import Register from './components/register/register';

function Author() {
    const dispatch = useDispatch()
    const { isLogin } = useSelector((state) => state.author)

    //check token if have call api with only token
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getUser())
        }
    }, [dispatch])

    return (<>
        <S.Author>
            <Container>
                <Row className="align-items-center" style={{ display: isLogin ? 'none' : 'flex' }}>
                    <Col xs={6} lg={3}>
                        <Register />
                    </Col>
                    <Col xs={6} lg={3}>
                        <Login />
                    </Col>
                    <Col lg={6} className="d-none d-sm-block">
                        <S.Phone theme={theme}>
                            <img src={iconCall} alt="Phone" />
                            <a href='tel:028 7300 8881'>{AUTHORS.phone}</a>
                        </S.Phone>
                    </Col>
                </Row>

                <Row className="align-items-center" style={{ display: isLogin ? 'flex' : 'none' }}>
                    <User />
                </Row>
            </Container>
        </S.Author >
    </>);
}

export default Author;
