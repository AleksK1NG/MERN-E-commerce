import React from 'react'
import { connect } from 'react-redux'
import './CartDropDown.styles.scss'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import { cartItemsSelector, cartItemsTotalSelector } from '../../../storeModules/cart/cartSelectors'
import CartItem from '../CartItem/CartItem'
import { toggleCartHidden } from '../../../storeModules/ui/uiActions'
import { withRouter } from 'react-router-dom'

const CartDropDown = ({ cartItems, totalCost, history, toggleCartHidden }) => {
  const goCheckoutHandler = () => {
    history.push('/checkout')
    toggleCartHidden()
  }

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

      <CustomButton onClick={goCheckoutHandler}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default withRouter(
  connect(
    (state) => ({
      cartItems: cartItemsSelector(state),
      totalCost: cartItemsTotalSelector(state)
    }),
    { toggleCartHidden }
  )(CartDropDown)
)
