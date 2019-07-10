import React, { useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollections } from '../../storeModules/shop/shopActions'
import Spinner from '../../components/Shared/Spinner/Spinner'

import { ShopPageContainer } from './ShopPage.styles'

const CollectionPage = React.lazy(() => import('../CollectionPage/CollectionPage'))
const CollectionsOverview = React.lazy(() =>
  import('../../components/Collection/CollectionsOverview/CollectionsOverview')
)

const ShopPage = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections()
  }, [fetchCollections])

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </Suspense>
    </ShopPageContainer>
  )
}

export default connect(
  null,
  { fetchCollections }
)(ShopPage)
