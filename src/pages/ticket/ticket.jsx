import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { TICKET } from '../../constants';
import { theme } from '../../styles/theme';
import { getSlug } from '../movies/moviesSlice';
import Seats from './components/seats/seats';
import * as S from './style-ticket';
import { getIdMovies, getIdTheater, getTheater, getDates, getHours, getIdDate, resetHours, resetDate, getIdHours, getSeats, resetSeats } from './ticketSlice';

function Ticket() {
    const params = useParams()
    const dispatch = useDispatch()
    const { image, name, _id } = useSelector((state) => state.movies.detailMovie)
    const { allTheater, allDates, allHours, idTheater, idDate, idHours } = useSelector((state) => state.ticket)
    const [nameTheater, setNameTheater] = useState()
    const [nameDates, setNameDates] = useState()
    const [nameHour, setNameHour] = useState()

    // run to get first data
    useEffect(() => {
        dispatch(getSlug(params.slug))
        dispatch(getTheater())
        dispatch(getIdMovies(_id))
    }, [dispatch, params.slug, _id])

    const handleClickTheater = (id, name) => {
        setNameTheater(name)
        if (idTheater !== id) {
            dispatch(getIdTheater(id))
            dispatch(resetHours())
            dispatch(resetDate())
            dispatch(resetSeats())
            dispatch(getDates()) // run to get dataDate = idMovie + idTheater
        } else {
            dispatch(getIdTheater(id))
        }
    }

    const handleClickDates = (name) => {
        setNameDates(name)
        if (idDate !== name) {
            dispatch(getIdDate(name))
            dispatch(resetHours())
            dispatch(resetSeats())
            dispatch(getHours()) // run to get hours = idMovie + idTheater + idDate
        } else {
            dispatch(getIdDate(name))
        }
    }

    const handleClickHours = (name) => {
        setNameHour(name)
        if (idHours !== name) {
            dispatch(getIdHours(name))
            dispatch(resetSeats())
            dispatch(getSeats()) // run to get seats = idMovie + idTheater + idDate + idHours
        } else {
            dispatch(getIdHours(name))
        }
    }

    const theaterRender =
        allTheater.length ? allTheater.map((theater, i) => (
            <DropdownItem key={i} onClick={() => handleClickTheater(theater._id, theater.name)}>{theater.name}</DropdownItem>
        )) : ''

    const datesRender =
        allDates.length ? allDates.map((date, i) => (
            <DropdownItem key={i} onClick={() => handleClickDates(date)}>{new Date(date).toLocaleDateString()}</DropdownItem>
        )) : ''

    const hoursRender =
        allHours.length ? allHours.map((hour, i) => (
            <DropdownItem key={i} onClick={() => handleClickHours(hour)}>{hour}</DropdownItem>
        )) : ''

    return (
        <S.TimeMovie theme={theme}>
            <Container>
                <Row>
                    <Col lg={5}>
                        <S.Image src={image} alt={name} />
                    </Col>
                    <Col lg={7} className="text-center">
                        <S.Title>{name}</S.Title>
                        <Row>
                            <Col lg={4}>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret theme={theme}>
                                        {idTheater ? nameTheater : TICKET.theater}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {theaterRender}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                            <Col lg={4}>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>
                                        {idDate ? new Date(nameDates).toLocaleDateString() : TICKET.date}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {datesRender}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                            <Col lg={4}>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>
                                        {idHours ? nameHour : TICKET.hours}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {hoursRender}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                {(idHours && <Seats nameTheater={nameTheater} />) || <>{TICKET.requiredGetSeats}</>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </S.TimeMovie>
    );
}

export default Ticket;
