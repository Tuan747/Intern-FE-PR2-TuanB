import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import iconRegister from '../../resourses/img/icon-register.png'
import iconLogin from '../../resourses/img/icon-login.png'
import iconCall from '../../resourses/img/icon-call.png'
import * as S from './style-author'
import { theme } from '../../styles/theme'
import { AUTHORS } from '../../constants';
import Login from './components/login/login';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './authorSlice';
import User from '../user/user';

function Author() {
    const { isLogin } = useSelector((state) => state.author)
    const dispatch = useDispatch()
    const [toggleRegister, setToggleRegister] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(false);

    //check token if have call api with only token
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(getUser())
        }
    }, [dispatch])

    const handleToggleRegister = () => {
        setToggleRegister(!toggleRegister)
        setToggleLogin(false);
    }

    const handleToggleLogin = () => {
        setToggleLogin(!toggleLogin)
        setToggleRegister(false);
    }

    return (
        <S.Author>
            <Container>
                <Row className="align-items-center" style={{ display: isLogin ? 'none' : 'flex' }}>
                    <Col lg={3}>
                        <S.BtnAuthor theme={theme}>
                            <img src={iconRegister} alt="Register" />
                            <span onClick={handleToggleRegister}>{AUTHORS.register}</span>
                            {toggleRegister ? <>ok </> : ''}
                        </S.BtnAuthor>
                    </Col>
                    <Col lg={3}>
                        <S.BtnAuthor theme={theme}>
                            <img src={iconLogin} alt="Login" />
                            <span theme={theme} onClick={handleToggleLogin}>{AUTHORS.login}</span>
                            {toggleLogin ? <Login /> : ''}
                        </S.BtnAuthor>
                    </Col>
                    <Col lg={6}>
                        <S.Phone theme={theme}>
                            <img src={iconCall} alt="Phone" />
                            <a href='tel:028 7300 8881'>{AUTHORS.phone}</a>
                        </S.Phone>
                    </Col>
                </Row>

                <Row className="align-items-center" style={{ display: isLogin ? 'flex' : 'none' }}>
                    <User onToggleLogin={handleToggleLogin} />
                </Row>
            </Container>
        </S.Author >
    );
}

export default Author;
