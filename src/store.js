import createSagaMiddleware from 'redux-saga'
import { configureStore, } from '@reduxjs/toolkit'
import rootSaga from './sagas/rootSaga'

const rootReducer = {
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga)

export default store
