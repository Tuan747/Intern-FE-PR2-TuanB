import { call, put, delay, takeEvery } from 'redux-saga/effects';
import moviesAPI from '../../api/moviesAPI';
import { showError } from '../../components/ErrorMessage/errorMessageSlice';
import { hiddenLoading, showLoading } from '../../components/Loading/lodingSlice';
import { FETCH_DATA_SUCCESS } from '../../constants';
import { getAllMovies, getDetails, getSlug, getStatus } from "./moviesSlice"

function* trackingGetMoviesByStatus(status) {
    yield put(showLoading())
    const data = yield call(moviesAPI.getAPIStatus, status.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllMovies(data.data))
    } else {
        yield put(showError())
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetDetailMovies(slug) {
    yield put(showLoading())
    const data = yield call(moviesAPI.getAPIDetail, slug.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getDetails(data.data))
    } else {
        yield put(showError())
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* MovieSaga() {
    yield takeEvery(getStatus, trackingGetMoviesByStatus)
    yield takeEvery(getSlug, trackingGetDetailMovies)
}

export default MovieSaga
