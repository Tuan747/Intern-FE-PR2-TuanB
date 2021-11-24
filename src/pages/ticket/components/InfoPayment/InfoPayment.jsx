import { faCalendarAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import * as S from './style-InfoPayment'
import { theme } from '../../../../styles/theme';
import { AUTHORS, FETCH_DATA_SUCCESS, METHOD_PAYMENT_MOMO, TICKET } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { paymentMethod, getPayment, paymentReset, clearPaymentSuccess } from './InfoPaymentSlice';
import { toast } from 'react-toastify';
import { addGift, resetSeats } from '../../ticketSlice';

function InfoPayment({ nameTheater }) {
    const dispatch = useDispatch()
    const [method, setMethod] = useState()
    const [gift, setGift] = useState()
    const methodSelector = useSelector((state) => state.payment.method)
    const { name, length } = useSelector((state) => state.movies.detailMovie)
    const { idDate, idHours, seatSelect, allSeats, price, gift_code, number_ticket } = useSelector((state) => state.ticket)
    const { isLogin, dataUser } = useSelector((state) => state.author)
    const { infoPayment, paymentSuccess } = useSelector((state) => state.payment)

    const notifyLogin = () => toast.error(AUTHORS.required_login);
    const notifyMethodPayment = () => toast.error(TICKET.required_method);
    const notifyPaymentSuccess = () => toast.success(AUTHORS.history.notify_payment_success);

    useEffect(() => {
        if (infoPayment.link?.length > 0) {
            window.open(infoPayment.link)
            dispatch(paymentReset())
            dispatch(resetSeats())
            window.location.reload();
        }
    }, [dispatch, infoPayment.link])

    useEffect(() => {
        if (paymentSuccess === FETCH_DATA_SUCCESS) {
            notifyPaymentSuccess()
            dispatch(clearPaymentSuccess())
        }
    }, [paymentSuccess, dispatch])

    const handleGetMethod = (method) => {
        setMethod(method)
        dispatch(paymentMethod((method)))
    }

    const handlePayment = () => {
        if (!isLogin) {
            notifyLogin()
        }
        else if (!methodSelector) {
            notifyMethodPayment()
        } else {
            const body = {
                gift: 0,
                price: price,
                seat: seatSelect
            }
            const idSeats = allSeats._id
            dispatch(getPayment({ idSeats, body }))
        }
    }

    const handleGift = (gift) => {
        setGift(gift.code)
        dispatch(addGift({ gift: gift, price: allSeats.movietime.price }))
    }

    const handleShowMethodPayment =
        <UncontrolledDropdown>
            <DropdownToggle caret theme={theme}>
                {method || TICKET.select}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => handleGetMethod(METHOD_PAYMENT_MOMO)}>{METHOD_PAYMENT_MOMO}</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>

    const handleShowGift =
        <UncontrolledDropdown>
            <DropdownToggle caret theme={theme}>
                {gift || TICKET.select}
            </DropdownToggle>
            <DropdownMenu>
                {dataUser.gift_code?.length ? dataUser.gift_code.map((item, i) => {
                    return <DropdownItem key={i} onClick={() => handleGift(item)}>{item.code}</DropdownItem>
                }) : 'Hiện tại bạn chưa có mã gift'}
            </DropdownMenu>
        </UncontrolledDropdown>

    return (
        <Row className="justify-content-center">
            <Col lg={8}>
                <S.InfoPayment theme={theme}>
                    <h1>{TICKET.titlePayment}</h1>
                    <S.Content theme={theme}>
                        <h2>{name}</h2>
                        <div>{length} {TICKET.minute}</div>
                        <S.Time theme={theme}>
                            <div>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>{nameTheater}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                <span>{new Date(idDate).toLocaleDateString()}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faClock} />
                                <span>{idHours}</span>
                            </div>
                        </S.Time>
                    </S.Content>
                    <S.Seats theme={theme}>
                        <h2>{TICKET.seat}</h2>
                        <div>{seatSelect.length && seatSelect.join(', ')}</div>
                    </S.Seats>
                    <S.Price theme={theme}>
                        <S.BoxItem theme={theme}>
                            <div>{TICKET.unit_price}</div>
                            <div>{allSeats.movietime.price} {TICKET.unit_VND}</div>
                        </S.BoxItem>
                        <S.BoxItem theme={theme}>
                            <div>{TICKET.quantity}</div>
                            <div>{number_ticket}</div>
                        </S.BoxItem>
                        <S.BoxItem theme={theme} style={{ display: gift_code ? 'flex' : 'none' }}>
                            <div>{TICKET.gift}</div>
                            <div>- {gift_code?.gift.value} {TICKET.unit_VND}</div>
                        </S.BoxItem>
                        <S.BoxItem theme={theme} style={{ display: isLogin ? 'flex' : 'none' }}>
                            <div>{TICKET.add_gift}</div>
                            {handleShowGift}
                        </S.BoxItem>
                    </S.Price>
                    <div>
                        <S.BoxItem theme={theme}>
                            <div>{TICKET.total}</div>
                            <div>{price} {TICKET.unit_VND}</div>
                        </S.BoxItem>
                        <S.BoxItem theme={theme}>
                            <div>{TICKET.methodPayment}</div>
                            {handleShowMethodPayment}
                        </S.BoxItem>
                    </div>
                    <S.BtnByTicket theme={theme} type="button" onClick={handlePayment}>{TICKET.btn}</S.BtnByTicket>
                </S.InfoPayment>
            </Col>
        </Row>
    );
}

export default InfoPayment;
