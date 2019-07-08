import React from 'react'
import { connect } from 'react-redux'
import { cartItemsSelector, cartItemsTotalSelector } from '../../storeModules/cart/cartSelectors'
import CheckoutItem from '../../components/CheckOut/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton'
import './CheckOutPage.styles.scss'

const CheckOutPage = ({ cartItems, totalCost }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalCost}</div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalCost} />
    </div>
  )
}

export default connect(
  (state) => ({
    cartItems: cartItemsSelector(state),
    totalCost: cartItemsTotalSelector(state)
  }),
  {}
)(CheckOutPage)
