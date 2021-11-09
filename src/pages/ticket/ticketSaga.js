import { call, put, delay, takeEvery, select } from 'redux-saga/effects';
import ticketAPI from '../../api/ticketAPI';
import { hiddenLoading, showLoading } from '../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../constants';
import { error, getAllTheater, getDates, getTheater, getAllDates, getHours, getAllHours, getSeats, getAllSeats } from './ticketSlice';

function* trackingGetAllTheaters() {
    yield put(showLoading())
    const data = yield call(ticketAPI.getAllTheater)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllTheater(data.data))
    } else {
        yield put(error(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetAllDates() {
    yield put(showLoading())
    const { idMovie, idTheater } = yield select(state => state.ticket)
    const data = yield call(ticketAPI.getAllDates, idMovie, idTheater)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllDates(data.data))
    } else {
        yield put(error(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetAllHours() {
    yield put(showLoading())
    const { idMovie, idTheater, idDate } = yield select(state => state.ticket)
    const data = yield call(ticketAPI.getAllHours, idMovie, idTheater, idDate)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllHours(data.data))
    } else {
        yield put(error(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetAllSeats() {
    yield put(showLoading())
    const { idMovie, idTheater, idDate, idHours } = yield select(state => state.ticket)
    const data = yield call(ticketAPI.getAllSeats, idMovie, idTheater, idDate, idHours)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllSeats(data.data))
    } else {
        yield put(error(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* ticketSaga() {
    yield takeEvery(getTheater, trackingGetAllTheaters)
    yield takeEvery(getDates, trackingGetAllDates)
    yield takeEvery(getHours, trackingGetAllHours)
    yield takeEvery(getSeats, trackingGetAllSeats)
}

export default ticketSaga
