import React from 'react'
import { connect } from 'react-redux'
import './CollectionItem.styles.scss'
import CustomButton from '../../Shared/CustomButton/CustomButton'
import { addCartItem } from '../../../storeModules/cart/cartActions'

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item

  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to CART
      </CustomButton>
    </div>
  )
}

export default connect(
  null,
  { addCartItem }
)(CollectionItem)
