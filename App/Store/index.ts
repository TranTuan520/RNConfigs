import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

// Reducers
import TodoReducer from './Todo'

// Saga
import rootSaga from './Sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  todo: TodoReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
