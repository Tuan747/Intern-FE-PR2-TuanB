import createSagaMiddleware from 'redux-saga'
import { configureStore, } from '@reduxjs/toolkit'
import rootSaga from './sagas/rootSaga'
import moviesReducer from './pages/movies/moviesSlice'
import loadingReducer from './components/Loading/lodingSlice'
import errorMessageReducer from './components/ErrorMessage/errorMessageSlice'

const rootReducer = {
    movies: moviesReducer,
    loading: loadingReducer,
    errorMessage: errorMessageReducer,
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga)

export default store
