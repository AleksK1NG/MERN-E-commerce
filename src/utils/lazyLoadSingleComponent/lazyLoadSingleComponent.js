import React, { Suspense } from 'react'
import Spinner from '../../components/Shared/Spinner/Spinner'

export const load = (Component) => (props) => (
  <Suspense fallback={<Spinner />}>
    <Component {...props} />
  </Suspense>
)
