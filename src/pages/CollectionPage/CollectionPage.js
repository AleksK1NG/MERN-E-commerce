import React from 'react'
import { connect } from 'react-redux'
import { collectionUrlParamSelector } from '../../storeModules/shop/shopSelectors'
import CollectionItem from '../../components/Collection/CollectionItem/CollectionItem'
import './CollectionPage.styles.scss'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default connect(
  (state, ownProps) => ({
    collection: collectionUrlParamSelector(ownProps.match.params.collectionId)(state)
  }),
  null
)(CollectionPage)
