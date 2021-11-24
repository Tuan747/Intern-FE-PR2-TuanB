import React, { useEffect, useState } from 'react';
import * as S from './style-movies'
import { theme } from '../../styles/theme'
import { NavLink, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { getStatus } from './moviesSlice';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MOVIES } from '../../constants/index'

function Movies() {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const [status, setStatus] = useState(MOVIES.status.now)
    const dataMovies = useSelector((state) => state.movies.movies)

    useEffect(() => {
        dispatch(getStatus(status))
    }, [dispatch, status])

    const handleShowMovies =
        dataMovies && dataMovies.length > 0 && dataMovies.map((movie, index) => {
            const { image, name, decription, rating, trailer, slug } = movie
            const handleShowRating = [...Array(rating)].map((rating, index) => {
                return <FontAwesomeIcon key={index} icon={faStar} />
            })
            return (
                <Col xs={6} lg={6} key={index}>
                    <S.Movie theme={theme}>
                        <S.Image src={image} alt={name} theme={theme} />
                        <S.Content>
                            <S.Title theme={theme}>{name}</S.Title>
                            <S.Desc className="d-none d-sm-block">{decription}</S.Desc>
                            <S.Rating className="d-none d-sm-block" theme={theme}>{handleShowRating}</S.Rating>
                            <S.Control>
                                <S.BtnControl
                                    theme={theme}
                                    border={'0 30px 30px 30px'}
                                    borderResponsive={'0 0 0 14px'}
                                    bg={'rgba(0,0,0,0.5)'}
                                    href={trailer}
                                    target="_blank"
                                    rel="nonpener noreferrer"
                                >
                                    {MOVIES.trailer}
                                </S.BtnControl>

                                <S.BtnControl
                                    theme={theme}
                                    border={'30px 0 30px 30px'}
                                    left={'-35px'}
                                    leftResponsive={'-14px'}
                                    bg={'#f18720'}
                                >
                                    <NavLink to={`/detailphim/${slug}`}>{MOVIES.byeTicket}</NavLink>
                                </S.BtnControl>
                            </S.Control>
                        </S.Content>
                    </S.Movie>
                </Col>
            )
        })

    return (
        <Container>
            <Row>
                <S.Types theme={theme}>
                    <S.TypeSelect
                        theme={theme}
                        zIndex={2}
                        border={'50px 50px 50px 0'}
                        onClick={() => setStatus(MOVIES.status.now)}
                    >
                        <NavLink to={`${match.url}/${MOVIES.status.now}`} className={classNames({ 'actives': status === MOVIES.status.now ? true : false })}>{MOVIES.title.now}</NavLink>
                    </S.TypeSelect>

                    <S.TypeSelect
                        theme={theme}
                        onClick={() => setStatus(MOVIES.status.comming)}
                        zIndex={1}
                        border={'0 36px 0 0'}
                        left={'-45px'}
                        leftResponsive={'22px'}
                    >
                        <NavLink to={`${match.url}/${MOVIES.status.comming}`} className={classNames({ 'actives': status === MOVIES.status.comming ? true : false })}>{MOVIES.title.comming}</NavLink>
                    </S.TypeSelect>
                </S.Types>
                <Container>
                    <Row>
                        {handleShowMovies}
                    </Row>
                </Container>
            </Row>
        </Container>
    );
}

export default Movies;
