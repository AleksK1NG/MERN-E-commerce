import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../storeModules/ui/uiActions'
import { cartItemsCountSelector } from '../../../storeModules/cart/cartSelectors'

import { ShoppingIcon, CartContainer, ItemCountContainer } from './CartIcon.styles'

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartContainer>
  )
}

export default connect(
  (state) => ({
    cartItemsCount: cartItemsCountSelector(state)
  }),
  { toggleCartHidden }
)(CartIcon)
