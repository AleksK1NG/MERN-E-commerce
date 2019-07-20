// import { replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import { call, put, all, takeLatest } from 'redux-saga/effects'
import { rejectError } from '../../utils/rejectErrorHelper'
import {
  FETCH_COLLECTIONS_ERROR,
  FETCH_COLLECTIONS_REQUEST,
  FETCH_COLLECTIONS_SUCCESS,
  GET_SECTIONS_REQUEST,
  STRIPE_PAYMENT_ERROR,
  STRIPE_PAYMENT_REQUEST
} from './shopConstants'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'
import ApiService from '../../services/apiService'
import { fetchCollectionsError, fetchCollectionsSuccess, getSectionsError, getSectionsSuccess } from './shopActions'

export function* fetchCollectionsSaga() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    console.error(error)
    yield put(fetchCollectionsError(error))
    toast.error(rejectError(error))
  }
}

export function* stripePaymentSaga({ payload }) {
  try {
    const data = yield call(ApiService.stripePayment, payload.paymentData)
    console.log('Stripe payments data => ', data)
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

export function* getAllSectionsSaga() {
  try {
    const { data } = yield call(ApiService.getAllSections)
    yield put(getSectionsSuccess(data))
  } catch (error) {
    console.error(error)
    yield put(getSectionsError(error))
  }
}

export function* saga() {
  yield all([
    takeLatest(FETCH_COLLECTIONS_REQUEST, fetchCollectionsSaga),
    takeLatest(STRIPE_PAYMENT_REQUEST, stripePaymentSaga),
    takeLatest(GET_SECTIONS_REQUEST, getAllSectionsSaga)
  ])
}
