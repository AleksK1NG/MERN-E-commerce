import React from 'react'
import './CollectionItem.styles.scss'
import CustomButton from '../../Shared/CustomButton/CustomButton'

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <CustomButton inverted>Add to CART</CustomButton>
    </div>
  )
}

export default React.memo(CollectionItem)
