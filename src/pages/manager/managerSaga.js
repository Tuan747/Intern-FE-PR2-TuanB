import { call, put, delay, takeEvery, select } from 'redux-saga/effects';
import managerMoviesAPI from '../../api/managerMoviesAPI';
import managerUserAPI from '../../api/managerUserAPI';
import { hiddenLoading, showLoading } from '../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../constants';
import { deleteUser, getAllMovies, getAllUser, getErrors, getMovies, getNumberUserMonth, getNumberUserWeek, getNumberUserYear, getStatusDeletesUser, getUser, getUserMonth, getUserWeek, getUserYear } from './managerSlice';

function* trackingGetAllUser() {
    yield put(showLoading())
    const { limit, page } = yield select(state => state.pagination)
    const data = yield call(managerUserAPI.getAPIAllUser, limit, page)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllUser(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetNumberWeek() {
    yield put(showLoading())
    const data = yield call(managerUserAPI.getAPINumberWeek)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getNumberUserWeek(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetNumberMonth() {
    yield put(showLoading())
    const data = yield call(managerUserAPI.getAPINumberMonth)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getNumberUserMonth(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetNumberYear() {
    yield put(showLoading())
    const data = yield call(managerUserAPI.getAPINumberYear)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getNumberUserYear(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingDeleteUser(action) {
    yield put(showLoading())
    const data = yield call(managerUserAPI.getAPIDeleteUser, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getStatusDeletesUser(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetAllMovies() {
    yield put(showLoading())
    const { limit, page } = yield select(state => state.pagination)
    const data = yield call(managerMoviesAPI.getAPIAllMovies, limit, page)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllMovies(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* managerSaga() {
    yield takeEvery(getUser, trackingGetAllUser)
    yield takeEvery(getUserWeek, trackingGetNumberWeek)
    yield takeEvery(getUserMonth, trackingGetNumberMonth)
    yield takeEvery(getUserYear, trackingGetNumberYear)
    yield takeEvery(deleteUser, trackingDeleteUser)
    yield takeEvery(getMovies, trackingGetAllMovies)
}

export default managerSaga
