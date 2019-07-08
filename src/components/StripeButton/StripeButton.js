import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_LTPsxTlZIIXFQlB8FrLIDjco'

  const onToken = (token) => {
    console.log('stripe token => ', token)
    alert('Payment Successful!')
  }

  return (
    <StripeCheckout
      name="E-commerce"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      currency="USD"
      email="alexander.bryksin@yandex.ru"
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

export default StripeButton
