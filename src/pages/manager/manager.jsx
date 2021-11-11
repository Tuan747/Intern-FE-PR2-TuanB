import React, { useState } from 'react';
import * as S from './style-manager'
import { theme } from '../../styles/theme'
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faGift, faUserAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import { TAB_ADMIN_GIFT, TAB_ADMIN_MOVIE, TAB_ADMIN_MOVIETIME, TAB_ADMIN_USER } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { getNewTab } from './managerSlice'
import ManagerUser from './components/managerUser/managerUser';
import ManagerMovies from './components/managerMovies/managerMovies';
import ManagerMovieTime from './components/managerMovieTime/managerMovieTime';
import ManagerGift from './components/managerGift/managerGift';
import { clearPage } from '../../components/Pagination/pagiSlice';

function Manager() {
    const dispatch = useDispatch()
    const [tabChange, setTabChange] = useState(TAB_ADMIN_USER)
    const { tab } = useSelector((state) => state.manager)

    const handleChangeNewTab = (tab) => {
        setTabChange(tab)
        dispatch(clearPage())
        dispatch(getNewTab(tab))
    }

    return (
        <S.Admin theme={theme}>
            <Container>
                <Row>
                    <Col lg={3}>
                        <S.TabContent theme={theme}>
                            <S.TabItem theme={theme} onClick={() => handleChangeNewTab(TAB_ADMIN_USER)} className={classNames({ 'admin__tab-active': tab === TAB_ADMIN_USER })}><FontAwesomeIcon icon={faUserAlt} /> Quản lý người dùng</S.TabItem>
                            <S.TabItem theme={theme} onClick={() => handleChangeNewTab(TAB_ADMIN_MOVIE)} className={classNames({ 'admin__tab-active': tab === TAB_ADMIN_MOVIE })}><FontAwesomeIcon icon={faFilm} /> Quản lý phim</S.TabItem>
                            <S.TabItem theme={theme} onClick={() => handleChangeNewTab(TAB_ADMIN_MOVIETIME)} className={classNames({ 'admin__tab-active': tab === TAB_ADMIN_MOVIETIME })}><FontAwesomeIcon icon={faVideo} /> Quản lý suất chiếu</S.TabItem>
                            <S.TabItem theme={theme} onClick={() => handleChangeNewTab(TAB_ADMIN_GIFT)} className={classNames({ 'admin__tab-active': tab === TAB_ADMIN_GIFT })}><FontAwesomeIcon icon={faGift} /> Quản lý quà tặng</S.TabItem>
                        </S.TabContent>
                    </Col>
                    <Col lg={9}>
                        <ManagerUser tabChange={tabChange} />
                        <ManagerMovies tabChange={tabChange} />
                        <ManagerMovieTime tabChange={tabChange} />
                        <ManagerGift tabChange={tabChange} />
                    </Col>
                </Row>
            </Container>
        </S.Admin>
    );
}

export default Manager;
