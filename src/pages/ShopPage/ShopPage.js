import React from 'react'
import { Route } from 'react-router-dom'
import './ShopPage.styles.scss'

const CategoryPage = React.lazy(() => import('../CategoryPage/CategoryPage'))
const CollectionsOverview = React.lazy(() =>
  import('../../components/Collection/CollectionsOverview/CollectionsOverview')
)

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  )
}

export default ShopPage
