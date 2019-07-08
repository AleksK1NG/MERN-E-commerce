import React from 'react'
import { connect } from 'react-redux'
import { cartItemsSelector, cartItemsTotalSelector } from '../../../storeModules/cart/cartSelectors'
import CartItem from '../CartItem/CartItem'
import { toggleCartHidden } from '../../../storeModules/ui/uiActions'
import { withRouter } from 'react-router-dom'
import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer
} from './CartDropDown.styles'

const CartDropDown = ({ cartItems, history, toggleCartHidden }) => {
  const goCheckoutHandler = () => {
    history.push('/checkout')
    toggleCartHidden()
  }

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={goCheckoutHandler}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
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
