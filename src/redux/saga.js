import { all, call } from 'redux-saga/effects'
import { saga as authSaga } from '../storeModules/auth/authSaga'
import { saga as shopSaga } from '../storeModules/shop/shopSaga'

export default function* rootSaga() {
  yield all([call(authSaga), call(shopSaga)])
}
