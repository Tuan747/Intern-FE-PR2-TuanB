import { call, put, delay, takeEvery, select } from 'redux-saga/effects';
import promotionAPI from '../../api/promotionAPI';
import { hiddenLoading, showLoading } from '../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../constants';
import { errorPromotion, getAllListPromotion, getPromotion, getPromotionGift, statusGetPromotionGift } from './promotionSlice';
import { getNewTotalPages } from '../../components/Pagination/pagiSlice'

function* trackingGetAllPromotion() {
    yield put(showLoading())
    const { limit, page } = yield select(state => state.pagination)
    const data = yield call(promotionAPI.getAPIAllPromotion, limit, page)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getNewTotalPages(data.data.total))
        yield put(getAllListPromotion(data.data.gift))
    } else {
        yield put(errorPromotion(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetAllPromotionGift(action) {
    yield put(showLoading())
    const data = yield call(promotionAPI.getAPIAllPromotionGift, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(statusGetPromotionGift(data.statusCode))
    } else {
        yield put(statusGetPromotionGift(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* promotionSaga() {
    yield takeEvery([getPromotion, getPromotionGift], trackingGetAllPromotion)
    yield takeEvery(getPromotionGift, trackingGetAllPromotionGift)
}

export default promotionSaga
