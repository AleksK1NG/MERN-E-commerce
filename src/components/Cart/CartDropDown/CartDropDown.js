import React from 'react'
import { connect } from 'react-redux'
import './CartDropDown.styles.scss'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import { cartItemsSelector, cartItemsTotalSelector } from '../../../storeModules/cart/cartSelectors'
import CartItem from '../CartItem/CartItem'

const CartDropDown = ({ cartItems, totalCost }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
        {cartItems.length > 0 && <span>Total cost $: {totalCost}</span>}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default connect(
  (state) => ({
    cartItems: cartItemsSelector(state),
    totalCost: cartItemsTotalSelector(state)
  }),
  {}
)(CartDropDown)
