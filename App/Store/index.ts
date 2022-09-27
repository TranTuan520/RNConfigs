import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

// Reducers
import TodoReducer from './Todo'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
  todo: TodoReducer
})

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
