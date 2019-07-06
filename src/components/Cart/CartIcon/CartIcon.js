import React from 'react'
import { connect } from 'react-redux'
import './CartIcon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../../storeModules/ui/uiActions'

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default connect(
  null,
  { toggleCartHidden }
)(CartIcon)
