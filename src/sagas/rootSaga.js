import { all } from 'redux-saga/effects'
import searchSaga from '../components/Search/searchSaga';
import authorSaga from '../pages/author/authorSaga';
import managerSaga from '../pages/manager/managerSaga';
import MovieSaga from '../pages/movies/moviesSaga';
import promotionSaga from '../pages/promotion/promotionSaga';
import paymentSaga from '../pages/ticket/components/InfoPayment/InfoPaymentSaga';
import ticketSaga from '../pages/ticket/ticketSaga';

function* rootSaga() {
    yield all([
        MovieSaga(),
        authorSaga(),
        ticketSaga(),
        paymentSaga(),
        managerSaga(),
        searchSaga(),
        promotionSaga(),
    ]);
}

export default rootSaga
