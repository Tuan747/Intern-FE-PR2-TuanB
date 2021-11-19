import { call, put, delay, takeEvery } from 'redux-saga/effects';
import paymentAPI from '../../../../api/paymentAPI';
import { hiddenLoading, showLoading } from '../../../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../../../constants';
import { error, getInfoPayment, getPayment, getPaymentSuccess, rePayment } from './InfoPaymentSlice';

function* trackingGetInfoPayment(action) {
    yield put(showLoading())
    const data = yield call(paymentAPI.getInfoPayment, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getPaymentSuccess(data.statusCode))
        yield put(getInfoPayment(data.data))
    } else {
        yield put(error(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingRePayment(action) {
    yield put(showLoading())
    const data = yield call(paymentAPI.rePayment, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getPaymentSuccess(data.statusCode))
        yield put(getInfoPayment(data.data))
    } else {
        yield put(error(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* paymentSaga() {
    yield takeEvery(getPayment, trackingGetInfoPayment)
    yield takeEvery(rePayment, trackingRePayment)
}

export default paymentSaga
