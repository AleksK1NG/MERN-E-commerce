import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollections } from '../../storeModules/shop/shopActions'

const CollectionPage = React.lazy(() => import('../CollectionPage/CollectionPage'))
const CollectionsOverview = React.lazy(() =>
  import('../../components/Collection/CollectionsOverview/CollectionsOverview')
)

const ShopPage = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections()
  }, [fetchCollections])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default connect(
  null,
  { fetchCollections }
)(ShopPage)
