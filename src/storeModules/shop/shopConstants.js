/**
 * Constants
 * */
import { appName } from '../../config'

export const moduleName = 'shop'
const prefix = `${appName}/${moduleName}`

export const FETCH_COLLECTIONS_REQUEST = `${prefix}/FETCH_COLLECTIONS_REQUEST`
export const FETCH_COLLECTIONS_SUCCESS = `${prefix}/FETCH_COLLECTIONS_SUCCESS`
export const FETCH_COLLECTIONS_ERROR = `${prefix}/FETCH_COLLECTIONS_ERROR`
