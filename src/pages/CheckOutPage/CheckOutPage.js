import React from 'react'
import {connect} from 'react-redux'
import { cartItemsSelector, cartItemsTotalSelector } from '../../storeModules/cart/cartSelectors'
import './CheckOutPage.styles.scss'


const CheckOutPage = ({cartItems, totalCost}) => {
  return (
    <div>
      Check out page
    </div>
  )
}

export default connect(state => ({
  cartItems: cartItemsSelector(state),
  totalCost: cartItemsTotalSelector(state)
}), {})(CheckOutPage)
