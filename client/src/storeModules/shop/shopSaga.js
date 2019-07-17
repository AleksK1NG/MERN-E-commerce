// import { replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import { call, put, all, takeLatest } from 'redux-saga/effects'
import { rejectError } from '../../utils/rejectErrorHelper'
import {
  FETCH_COLLECTIONS_ERROR,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_SUCCESS,
  STRIPE_PAYMENT_ERROR,
  STRIPE_PAYMENT_REQUEST
} from './shopConstants'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import ApiService from '../../services/apiService'

export function* fetchCollectionsSaga() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

    yield put({
      type: FETCH_COLLECTIONS_SUCCESS,
      payload: { collectionsMap }
    })
    // yield put(replace('/'))
    // toast.success('You are registered ! =D')
  } catch (error) {
    console.error(error)
    yield put({
      type: FETCH_COLLECTIONS_ERROR,
      payload: { error }
    })
    toast.error(rejectError(error))
  }
}

export function* stripePaymentSaga({ payload }) {
  try {
    const data = yield call(ApiService.stripePayment, payload.paymentData)

    console.log('Stripe payment data response => ', data)
    debugger
    toast.success('You successfully make the payment ! =D ')
  } catch (error) {
    console.error(error)
    yield put({
      type: STRIPE_PAYMENT_ERROR,
      payload: { error }
    })
    toast.error('There was an issue with your payment! Please make sure you use the provided credit card.')
  }
}

export function* saga() {
  yield all([
    takeLatest(FETCH_COLLECTIONS_REQUEST, fetchCollectionsSaga),
    takeLatest(STRIPE_PAYMENT_REQUEST, stripePaymentSaga)
  ])
}
