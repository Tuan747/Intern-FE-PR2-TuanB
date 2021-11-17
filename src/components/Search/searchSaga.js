import { call, put, delay, takeEvery } from 'redux-saga/effects';
import searchAPI from '../../api/searchAPI';
import { hiddenLoading, showLoading } from '../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../constants';
import { getError, getResult, getValue } from './searchSlice';

function* trackingLoginSuccess(action) {
    yield put(showLoading())
    const data = yield call(searchAPI.getMovieSearch, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getResult(data.data))
    } else {
        yield put(getError(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* searchSaga() {
    yield takeEvery(getValue, trackingLoginSuccess)
}

export default searchSaga
