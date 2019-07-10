import React, { Suspense } from 'react'
import Loader from '../../components/Shared/Loader/Loader'

export const load = (Component) => (props) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
)
