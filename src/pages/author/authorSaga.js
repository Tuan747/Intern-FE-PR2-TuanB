import { call, put, delay, takeEvery } from 'redux-saga/effects';
import authorAPI from '../../api/authorAPI';
import { hiddenLoading, showLoading } from '../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../constants';
import { getStatus, getDataUser, getValueLogin, getUser } from './authorSlice';

function* trackingLoginSuccess(value) {
    yield put(showLoading())
    const data = yield call(authorAPI.getToken, value.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield localStorage.setItem('token', data.data.token)
        yield put(getDataUser(data.data.user))
        yield put(getStatus(data.statusCode))
    } else {
        yield put(getStatus(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetUser() {
    yield put(showLoading())
    const data = yield call(authorAPI.getUSer)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getDataUser(data.data))
        yield put(getStatus(data.statusCode))
    } else {
        yield put(getStatus(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}


function* authorSaga() {
    yield takeEvery(getValueLogin, trackingLoginSuccess)
    yield takeEvery(getUser, trackingGetUser)
}

export default authorSaga
