import { all } from 'redux-saga/effects'
import authorSaga from '../pages/author/authorSaga';
import MovieSaga from '../pages/movies/moviesSaga';

function* rootSaga() {
    yield all([
        MovieSaga(),
        authorSaga(),
    ]);
}

export default rootSaga
