import React from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { stripePayment } from '../../storeModules/shop/shopActions'

const StripeCheckoutButton = ({ price, stripePayment }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_LTPsxTlZIIXFQlB8FrLIDjco'

  const onToken = (token) => {
    console.log('stripe token => ', token)

    const paymentData = {
      amount: priceForStripe,
      token: token
    }
    debugger
    stripePayment(paymentData)
  }

  return (
    <StripeCheckout
      name="E-commerce"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      currency="USD"
      label="Pay Now"
      panelLabel="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      stripeKey={publishableKey}
      token={onToken}
    />
  )
}

export default connect(
  null,
  { stripePayment }
)(StripeCheckoutButton)
