import createSagaMiddleware from 'redux-saga'
import { configureStore, } from '@reduxjs/toolkit'
import rootSaga from './sagas/rootSaga'
import moviesReducer from './pages/movies/moviesSlice'
import loadingReducer from './components/Loading/lodingSlice'
import errorMessageReducer from './components/ErrorMessage/errorMessageSlice'
import authorReducer from './pages/author/authorSlice'
import ticketReducer from './pages/ticket/ticketSlice'

const rootReducer = {
    movies: moviesReducer,
    loading: loadingReducer,
    errorMessage: errorMessageReducer,
    author: authorReducer,
    ticket: ticketReducer,
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga)

export default store
