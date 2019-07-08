import React from 'react'
import { connect } from 'react-redux'
import { cartItemsSelector, cartItemsTotalSelector } from '../../storeModules/cart/cartSelectors'
import CheckoutItem from '../../components/CheckOut/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton'

import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './CheckOutPage.styles'

const CheckOutPage = ({ cartItems, totalCost }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${totalCost}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={totalCost} />
    </CheckoutPageContainer>
  )
}

export default connect(
  (state) => ({
    cartItems: cartItemsSelector(state),
    totalCost: cartItemsTotalSelector(state)
  }),
  {}
)(CheckOutPage)
