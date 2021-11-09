import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import * as S from './style-seats'
import classNames from 'classnames';
import { theme } from '../../../../styles/theme';
import { getSeatsSelect, removeSeatsSelect } from '../../ticketSlice';
import InfoPayment from '../InfoPayment/InfoPayment';
import { TICKET } from '../../../../constants';

function Seats({ nameTheater }) {
    const dispatch = useDispatch()
    const allSeats = useSelector((state) => state.ticket.allSeats.movietime)
    const { seatSelect } = useSelector((state) => state.ticket)

    const handleGetSeatsSelect = (id, available) => {
        if (available) {
            if (seatSelect.indexOf(id) < 0) {
                // add seats
                dispatch(getSeatsSelect({ seat: id, price: allSeats.price }))
            } else {
                // remove seats
                dispatch(removeSeatsSelect({ seat: id, price: allSeats.price }))
            }
        }
    }

    const handleShowSeats =
        allSeats?.seat.map((seats, i) => {
            return (
                <Row key={i}>
                    {
                        seats?.map(({ available, id, _id }) => {
                            return (
                                <Col lg={1} key={_id}>
                                    <S.SeatSelect
                                        theme={theme}
                                        onClick={() => handleGetSeatsSelect(id, available)}
                                        className={classNames({
                                            'seat-available': available,
                                            'seat-disabled': !available,
                                            'seat-selected': seatSelect.indexOf(id) < 0 ? false : true
                                        })}
                                    >{id}</S.SeatSelect>
                                </Col>
                            )
                        })
                    }
                </Row>
            )
        })

    return (<>
        <S.SeatContainer theme={theme}>
            {handleShowSeats}
        </S.SeatContainer>
        <S.Desc>
            <Row>
                <Col lg={4}>
                    <S.DescBox bg={'#c5bebe'} />
                    <S.DescText theme={theme}>{TICKET.seat_disabled}</S.DescText>
                </Col>
                <Col lg={4}>
                    <S.DescBox bg={'#E00D7A'} />
                    <S.DescText theme={theme}>{TICKET.seat_available}</S.DescText>
                </Col>
                <Col lg={4}>
                    <S.DescBox bg={'#4E0045'} />
                    <S.DescText theme={theme}>{TICKET.seat_selected}</S.DescText>
                </Col>
            </Row>
        </S.Desc>
        {(seatSelect.length && <InfoPayment nameTheater={nameTheater} />) || ''}

    </>);
}

export default Seats;
