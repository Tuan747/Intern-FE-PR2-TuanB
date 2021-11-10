import { call, put, delay, takeEvery, select } from 'redux-saga/effects';
import managerMoviesAPI from '../../api/managerMoviesAPI';
import managerUserAPI from '../../api/managerUserAPI';
import { hiddenLoading, showLoading } from '../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../constants';
import { deleteMove, deleteUser, editMovie, getAllMovies, getAllUser, getErrors, getMessageAddSuccess, getMessageDeleteSuccess, getMessageEditSuccess, getMovies, getMoviesComming, getMoviesPlaying, getMoviesTotal, getNumberMoviesComming, getNumberMoviesPlaying, getNumberMoviesTotal, getNumberUserMonth, getNumberUserWeek, getNumberUserYear, getStatusDeletesUser, getUser, getUserMonth, getUserWeek, getUserYear, newMovie } from './managerSlice';

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

function* trackingGetNumberMoviesPlaying() {
    yield put(showLoading())
    const data = yield call(managerMoviesAPI.getAPINumberPlaying)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getNumberMoviesPlaying(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetNumberMoviesComming() {
    yield put(showLoading())
    const data = yield call(managerMoviesAPI.getAPINumberComming)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getNumberMoviesComming(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetNumberMoviesTotal() {
    yield put(showLoading())
    const data = yield call(managerMoviesAPI.getAPINumberTotal)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getNumberMoviesTotal(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetNewMovies(action) {
    yield put(showLoading())
    const data = yield call(managerMoviesAPI.getAPINewMovies, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getMovies())
        yield put(getMessageAddSuccess(data.statusCode))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingEditMovies(action) {
    yield put(showLoading())
    const data = yield call(managerMoviesAPI.getAPIEditMovies, action.payload.data, action.payload.id)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getMovies())
        yield put(getMessageEditSuccess(data.statusCode))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingDeleteMovies(action) {
    yield put(showLoading())
    const data = yield call(managerMoviesAPI.getAPIDeleteMovies, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getMovies())
        yield put(getMessageDeleteSuccess(data.statusCode))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* managerSaga() {
    // user
    yield takeEvery(getUser, trackingGetAllUser)
    yield takeEvery(getUserWeek, trackingGetNumberWeek)
    yield takeEvery(getUserMonth, trackingGetNumberMonth)
    yield takeEvery(getUserYear, trackingGetNumberYear)
    yield takeEvery(deleteUser, trackingDeleteUser)

    // movies
    yield takeEvery(getMovies, trackingGetAllMovies)
    yield takeEvery(getMoviesPlaying, trackingGetNumberMoviesPlaying)
    yield takeEvery(getMoviesComming, trackingGetNumberMoviesComming)
    yield takeEvery(getMoviesTotal, trackingGetNumberMoviesTotal)
    yield takeEvery(newMovie, trackingGetNewMovies)
    yield takeEvery(editMovie, trackingEditMovies)
    yield takeEvery(deleteMove, trackingDeleteMovies)
}

export default managerSaga
