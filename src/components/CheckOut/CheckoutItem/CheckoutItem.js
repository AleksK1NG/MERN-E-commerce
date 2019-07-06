import React from 'react'
import { connect } from 'react-redux'
import './CheckoutItem.styles.scss'
import { addCartItem, clearItemFromCart, deleteCartItem } from '../../../storeModules/cart/cartActions'

const CheckoutItem = ({ cartItem, deleteCartItem, addCartItem, clearItemFromCart }) => {
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => deleteCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

export default connect(
  null,
  { deleteCartItem, addCartItem, clearItemFromCart }
)(CheckoutItem)
