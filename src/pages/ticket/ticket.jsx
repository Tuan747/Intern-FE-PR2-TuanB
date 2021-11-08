import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { TICKET } from '../../constants';
import { theme } from '../../styles/theme';
import { getSlug } from '../movies/moviesSlice';
import * as S from './style-ticket';

function Ticket() {
    const params = useParams()
    const dispatch = useDispatch()
    const { detailMovie } = useSelector((state) => state.movies)

    useEffect(() => {
        dispatch(getSlug(params.slug))
    }, [dispatch, params.slug])

    const { image, name } = detailMovie

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
                                        {TICKET.theater}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>rap1</DropdownItem>
                                        <DropdownItem>rap2</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                            <Col lg={4}>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>
                                        {TICKET.date}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>ngay1</DropdownItem>
                                        <DropdownItem>ngay2</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                            <Col lg={4}>
                                <UncontrolledDropdown>
                                    <DropdownToggle caret>
                                        {TICKET.hours}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>gio1</DropdownItem>
                                        <DropdownItem>gio2</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </S.TimeMovie>
    );
}

export default Ticket;
