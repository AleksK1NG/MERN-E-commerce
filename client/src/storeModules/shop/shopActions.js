import { FETCH_COLLECTIONS_REQUEST, STRIPE_PAYMENT_REQUEST } from './shopConstants'

export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS_REQUEST
})

export const stripePayment = (paymentData) => ({
  type: STRIPE_PAYMENT_REQUEST,
  payload: { paymentData }
})