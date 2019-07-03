import React from 'react'
import './ShopPage.styles.scss'
import { collections } from '../../data/shoppingData'
import CollectionPreview from '../../components/Collection/CollectionPreview/CollectionPreview'

const ShopPage = () => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
