import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import * as S from './style-promotion'
import promotionImg from '../../resourses/img/promotion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme'
import PaginationNumber from '../../components/Pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { clearStatusGetPromotionGift, getPromotion, getPromotionGift } from './promotionSlice';
import { toast } from 'react-toastify';
import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, PROMOTION } from '../../constants';

function Promotion() {
    const dispatch = useDispatch()
    const { promotion, statusGetPromotionGift } = useSelector((state) => state.promotion)
    const { limit, page } = useSelector((state) => state.pagination)
    const { isLogin } = useSelector((state) => state.author)
    const notifyRequiredLogin = () => toast.error(PROMOTION.notify_required_login);
    const notifyGetGiftSuccess = () => toast.success(PROMOTION.notify_get_gift_success);
    const notifyGetGiftError = () => toast.error(PROMOTION.notify_get_gift_error);
    const notifyGetGiftOutGift = () => toast.error(PROMOTION.notify_out_gift);

    useEffect(() => {
        dispatch(getPromotion())
    }, [dispatch, limit, page])

    useEffect(() => {
        if (statusGetPromotionGift) {
            if (statusGetPromotionGift === FETCH_DATA_SUCCESS) {
                notifyGetGiftSuccess()
                dispatch(clearStatusGetPromotionGift())
            }

            if (statusGetPromotionGift === FETCH_DATA_ERROR) {
                notifyGetGiftError()
                dispatch(clearStatusGetPromotionGift())
            }
        }
    }, [dispatch, statusGetPromotionGift])

    const handleGetPromotion = (id) => {
        if (isLogin) {
            dispatch(getPromotionGift(id))
        } else {
            notifyRequiredLogin()
        }
    }

    return (<>
        <Container>
            <Row>
                <Col lg={12}>
                    {promotion.length ? promotion.map((item) => {
                        const { _id, description, point_to_get, name, available } = item
                        return (
                            <S.ItemPromotion theme={theme} key={_id}>
                                <Row className="align-items-center">
                                    <Col lg={2}>
                                        <S.ImgPromotion theme={theme}>
                                            <img src={promotionImg} alt="promotion" />
                                        </S.ImgPromotion>
                                    </Col>
                                    <Col lg={8}>
                                        <S.ItemContent theme={theme}>
                                            <h1>{name}</h1>
                                            <span> {point_to_get}<FontAwesomeIcon icon={faGift} /></span>
                                            <div>{description}</div>
                                        </S.ItemContent>
                                    </Col>
                                    <Col lg={2}>
                                        {available === 0 ? <button onClick={notifyGetGiftOutGift}>{PROMOTION.btn_out_gift}</button> : <button onClick={() => handleGetPromotion(_id)}>{PROMOTION.btn_gift}</button>}
                                    </Col>
                                </Row>
                            </S.ItemPromotion>
                        )
                    }) : PROMOTION.empty_promotion}
                </Col>
            </Row>
        </Container>
        <PaginationNumber />
    </>);
}

export default Promotion;
