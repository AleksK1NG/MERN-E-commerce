import React from 'react'
import './ShopPage.styles.scss'
import CollectionPreview from '../../components/Collection/CollectionPreview/CollectionPreview'


const ShopPage = ({ collections, fetchCollections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
