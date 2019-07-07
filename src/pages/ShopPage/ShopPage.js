import React from 'react'
import './ShopPage.styles.scss'
import CollectionsOverview from '../../components/Collection/CollectionsOverview/CollectionsOverview'

const ShopPage = ({ collections, fetchCollections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  )
}

export default ShopPage
