import { call, put, delay, takeEvery, select } from 'redux-saga/effects';
import managerMoviesAPI from '../../api/managerMoviesAPI';
import managerMoviesTime from '../../api/managerMoviesTime';
import managerUserAPI from '../../api/managerUserAPI';
import ticketAPI from '../../api/ticketAPI';
import { hiddenLoading, showLoading } from '../../components/Loading/lodingSlice';
import { getNewPage, getNewTotalPages } from '../../components/Pagination/pagiSlice';
import { FETCH_DATA_SUCCESS } from '../../constants';
import { deleteMove, deleteMovieTime, deleteMovieTimeSuccess, deleteUser, editMovie, getAllDate, getAllMovies, getAllTheater, getAllUser, getDate, getDateSelect, getErrors, getListNameMoviesTime, getMessageAddSuccess, getMessageDeleteSuccess, getMessageEditSuccess, getMovies, getMoviesComming, getMoviesPlaying, getMoviesTimeNumber, getMoviesTotal, getMovieTime, getNameMovieTime, getNumberMoviesComming, getNumberMoviesPlaying, getNumberMoviesTotal, getNumberUserMonth, getNumberUserWeek, getNumberUserYear, getStatusDeletesUser, getTheater, getTheaterSelect, getUser, getUserMonth, getUserWeek, getUserYear, newMovie, newMovieTime, statusNewSuccess } from './managerSlice';

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
    console.log(data);
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getMovies())
        yield put(getMessageDeleteSuccess(data.statusCode))
    } else {
        yield put(getMessageDeleteSuccess(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetNumberMoviesTime() {
    yield put(showLoading())
    const { filter } = yield select(state => state.manager.managerMoviesTime)
    const { limit, page } = yield select(state => state.pagination)
    const data = yield call(managerMoviesTime.getAPIAllMoviesNumber, limit, page, filter)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getMoviesTimeNumber(data.data))
        yield put(getNewTotalPages(data.data.total))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetListNameMoviesTime() {
    yield put(showLoading())
    const data = yield call(managerMoviesTime.getAPIAllListName)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getListNameMoviesTime(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetAllTheater() {
    yield put(showLoading())
    const data = yield call(ticketAPI.getAllTheater)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllTheater(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetAllDate(action) {
    yield put(showLoading())
    const { id } = yield select(state => state.manager.managerMoviesTime.filter.name)
    const data = yield call(ticketAPI.getAllDates, id, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getAllDate(data.data))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingGetNewMovie(action) {
    yield put(showLoading())
    const data = yield call(managerMoviesTime.getAPINewMovie, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getMovieTime())
        yield put(statusNewSuccess(data.statusCode))
    } else {
        yield put(getErrors(data.statusCode))
    }
    yield delay(300)
    yield put(hiddenLoading())
}

function* trackingDeleteMovieTime(action) {
    yield put(showLoading())
    const data = yield call(managerMoviesTime.deleteMovieTime, action.payload)
    if (data.statusCode === FETCH_DATA_SUCCESS) {
        yield put(getMovieTime())
        yield put(deleteMovieTimeSuccess(data.statusCode))
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

    // movies time
    yield takeEvery([getMovieTime, getDateSelect, getTheaterSelect, getNewPage], trackingGetNumberMoviesTime)
    yield takeEvery(getNameMovieTime, trackingGetListNameMoviesTime)
    yield takeEvery(getTheater, trackingGetAllTheater)
    yield takeEvery(getDate, trackingGetAllDate)
    yield takeEvery(newMovieTime, trackingGetNewMovie)
    yield takeEvery(deleteMovieTime, trackingDeleteMovieTime)
}

export default managerSaga
