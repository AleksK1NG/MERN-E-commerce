import { all, call } from 'redux-saga/effects'
import { saga as authSaga } from '../storeModules/auth/authSaga'

export default function* rootSaga() {
  yield all([call(authSaga)])
}
