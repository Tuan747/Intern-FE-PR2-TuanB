import { all } from 'redux-saga/effects'
import MovieSaga from '../pages/movies/moviesSaga';

function* rootSaga() {
    yield all([
        MovieSaga(),
    ]);
}

export default rootSaga
