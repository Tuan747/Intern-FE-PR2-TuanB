import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { MOVIES } from '../../../../constants';
import { theme } from '../../../../styles/theme';
import { getSlug } from '../../moviesSlice';
import * as S from './style-detailMovie'

function DetailMovie() {
    const params = useParams()
    const dispatch = useDispatch()
    const detailMovie = useSelector((state) => state.movies.detailMovie)

    useEffect(() => {
        dispatch(getSlug(params.slug))
    }, [dispatch, params.slug])

    const { name, date, type, actor, director, decription, rating, image, slug } = detailMovie
    const handleShowRating = [...Array(rating)].map((rating, index) => {
        return <FontAwesomeIcon key={index} icon={faStar} />
    })

    return (
        <S.Detail>
            <Container>
                <Row>
                    <Col xs={12} lg={6} className="mb-4">
                        <S.Image src={image} alt={name} theme={theme} />
                    </Col>
                    <Col xs={12} lg={6}>
                        <S.ItemMovie theme={theme}>
                            <S.Title theme={theme}>{name}</S.Title>
                            <S.Info theme={theme}>
                                <S.InfoTitle theme={theme}>{MOVIES.detail.line1}</S.InfoTitle>
                                <S.InfoContent theme={theme}>{new Date(date?.date_start).toLocaleDateString()}</S.InfoContent>
                            </S.Info>
                            <S.Info theme={theme}>
                                <S.InfoTitle theme={theme}>{MOVIES.detail.line2}</S.InfoTitle>
                                <S.InfoContent theme={theme}>{type}</S.InfoContent>
                            </S.Info>
                            <S.Info theme={theme}>
                                <S.InfoTitle theme={theme}>{MOVIES.detail.line3}</S.InfoTitle>
                                <S.InfoContent theme={theme}>{actor}</S.InfoContent>
                            </S.Info>
                            <S.Info theme={theme}>
                                <S.InfoTitle theme={theme}>{MOVIES.detail.line4}</S.InfoTitle>
                                <S.InfoContent theme={theme}>{director}</S.InfoContent>
                            </S.Info>
                            <S.Desc theme={theme}>{decription}</S.Desc>
                            <S.Info theme={theme}>
                                <S.InfoTitle theme={theme}>{MOVIES.detail.line5}</S.InfoTitle>
                                <S.Rating theme={theme}>{handleShowRating}</S.Rating>
                            </S.Info>
                            <S.BtnTicket theme={theme} border={'30px 0 30px 30px'} bg={'#f18720'}>
                                <NavLink to={`/movietime/${slug}`}>{MOVIES.byeTicket}</NavLink>
                            </S.BtnTicket>
                        </S.ItemMovie>
                    </Col>
                </Row>
            </Container>
        </S.Detail>
    );
}

export default DetailMovie;
