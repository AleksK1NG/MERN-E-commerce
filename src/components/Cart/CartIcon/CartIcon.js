import React from 'react'
import { connect } from 'react-redux'
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../../storeModules/ui/uiActions'
import { cartItemsCountSelector } from '../../../storeModules/cart/cartSelectors'

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  )
}

export default connect(
  (state) => ({
    cartItemsCount: cartItemsCountSelector(state)
  }),
  { toggleCartHidden }
)(CartIcon)
