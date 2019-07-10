// import { replace } from 'connected-react-router'
import { toast } from 'react-toastify'

import { call, put, all, takeLatest } from 'redux-saga/effects'
import { rejectError } from '../../utils/rejectErrorHelper'
import { FETCH_COLLECTIONS_ERROR, FETCH_COLLECTIONS_REQUEST, FETCH_COLLECTIONS_SUCCESS } from './shopConstants'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils'

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

export function* saga() {
  yield all([takeLatest(FETCH_COLLECTIONS_REQUEST, fetchCollectionsSaga)])
}
