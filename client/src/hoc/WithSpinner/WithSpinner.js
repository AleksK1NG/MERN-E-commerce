import React from 'react'
import Spinner from '../../components/Shared/Spinner/Spinner'

export const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default WithSpinner
