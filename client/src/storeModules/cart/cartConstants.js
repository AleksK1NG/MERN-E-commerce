/**
 * Constants
 * */
import { appName } from '../../config'

export const moduleName = 'cart'
const prefix = `${appName}/${moduleName}`

export const ADD_CART_ITEM = `${prefix}/ADD_CART_ITEM`
export const DELETE_CART_ITEM = `${prefix}/DELETE_CART_ITEM`
export const CLEAR_CART = `${prefix}/CLEAR_CART`
export const CLEAR_ITEM_FROM_CART = `${prefix}/CLEAR_ITEM_FROM_CART`