import { all, takeLatest } from 'redux-saga/effects'
import { addTodoRequest } from '../Todo'
function* helloSaga() {
  console.log('helloSagaGeneratorFunction')
}

export default function* rootSaga() {
  yield all([takeLatest(addTodoRequest.type, helloSaga)])
}
