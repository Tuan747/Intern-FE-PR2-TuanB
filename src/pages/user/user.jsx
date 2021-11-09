import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import * as S from './style-user'
import user from '../../resourses/img/use.png'
import { theme } from '../../styles/theme'
import { logOut } from '../author/authorSlice';
import { AUTHORS } from '../../constants';

function User({ onToggleLogin }) {
    const dispatch = useDispatch()
    const { dataUser } = useSelector((state) => state.author)

    const handleLogOut = () => {
        localStorage.clear()
        dispatch(logOut())
        onToggleLogin()
    }

    return (
        <Col lg={2}>
            <S.Avatar theme={theme}>
                <img src={user} alt="avatar" theme={theme} />
                <div className="name__user">{dataUser.name}</div>
                <S.Option theme={theme}>
                    <li>{AUTHORS.user.infoUser}</li>
                    <li onClick={handleLogOut}>{AUTHORS.user.logOut}</li>
                </S.Option>
            </S.Avatar>
        </Col>
    );
}

export default User;
