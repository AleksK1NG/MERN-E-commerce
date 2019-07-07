import React from 'react'
import { connect } from 'react-redux'
import './CollectionPage.styles.scss'
import { collectionUrlParamSelector } from '../../storeModules/shop/shopSelectors'

const CollectionPage = ({ match, collection }) => {
  debugger
  return (
    <div className="collection">
      <h2>Collection Page</h2>
    </div>
  )
}

export default connect(
  (state, ownProps) => ({
    collection: collectionUrlParamSelector(ownProps.match.params.collectionId)(state)
  }),
  null
)(CollectionPage)
