import { call, put, delay, takeEvery } from 'redux-saga/effects';
import paymentAPI from '../../../../api/paymentAPI';
import { hiddenLoading, showLoading } from '../../../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../../../constants';
import { error, getInfoPayment, getPayment } from './InfoPaymentSlice';

function* trackingGetInfoPayment(action) {
    yield put(showLoading())
    const data = yield call(paymentAPI.getInfoPayment, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getInfoPayment(data.data))
    } else {
        yield put(error(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}
function* paymentSaga() {
    yield takeEvery(getPayment, trackingGetInfoPayment)
}

export default paymentSaga
