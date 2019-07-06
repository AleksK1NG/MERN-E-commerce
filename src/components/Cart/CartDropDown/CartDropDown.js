import React from 'react'
import { connect } from 'react-redux'
import './CartDropDown.styles.scss'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import {
  cartItemsCountSelector,
  cartItemsSelector,
  cartItemsTotalSelector
} from '../../../storeModules/cart/cartSelectors'
import CartItem from '../CartItem/CartItem'

const CartDropDown = ({ cartItems, cartItemsCount, totalCost }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems && cartItems.map((item) => <CartItem item={item} key={item.id} />)}
        Total cost $: {totalCost}
      </div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default connect(
  (state) => ({
    cartItems: cartItemsSelector(state),
    cartItemsCount: cartItemsCountSelector(state),
    totalCost: cartItemsTotalSelector(state)
  }),
  {}
)(CartDropDown)
