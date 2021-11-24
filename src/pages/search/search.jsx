import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { MOVIES, SEARCH } from '../../constants';
import { theme } from '../../styles/theme';
import * as F from '../movies/style-movies'
import * as S from './styled-search'

function Search() {
    const { result, value } = useSelector((state) => state.search)
    const notifySearch = `${SEARCH.notify_search_1}"${value}"${SEARCH.notify_search_2}${result.length}${SEARCH.notify_search_3}`

    return (
        <Container>
            <S.NotifySearch theme={theme}>{result && result.length ? notifySearch : SEARCH.empty_search}</S.NotifySearch>
            <Row>
                {result && result.length > 0 && result.map((movie, index) => {
                    const { image, name, decription, rating, trailer, slug } = movie
                    const handleShowRating = [...Array(rating)].map((rating, index) => {
                        return <FontAwesomeIcon key={index} icon={faStar} />
                    })
                    return (
                        <Col xs={6} lg={6} key={index}>
                            <F.Movie theme={theme}>
                                <F.Image src={image} alt={name} theme={theme} />
                                <F.Content>
                                    <F.Title theme={theme}>{name}</F.Title>
                                    <F.Desc className="d-none d-sm-block">{decription}</F.Desc>
                                    <F.Rating className="d-none d-sm-block" theme={theme}>{handleShowRating}</F.Rating>
                                    <F.Control>
                                        <F.BtnControl
                                            theme={theme}
                                            border={'0 30px 30px 30px'}
                                            borderResponsive={'0 0 0 14px'}
                                            bg={'rgba(0,0,0,0.5)'}
                                            href={trailer}
                                            target="_blank"
                                            rel="nonpener noreferrer"
                                        >
                                            {MOVIES.trailer}
                                        </F.BtnControl>

                                        <F.BtnControl
                                            theme={theme}
                                            border={'30px 0 30px 30px'}
                                            borderResponsive={'30px 0 30px 30px'}
                                            left={'-35px'}
                                            leftResponsive={'-14px'}
                                            bg={'#f18720'}
                                        >
                                            <NavLink to={`/detailphim/${slug}`}>{MOVIES.byeTicket}</NavLink>
                                        </F.BtnControl>
                                    </F.Control>
                                </F.Content>
                            </F.Movie>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default Search;
