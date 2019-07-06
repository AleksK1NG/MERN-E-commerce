import { TOGGLE_CART_HIDDEN } from './uiConstants'

// export const toggleCartHidden = () => ({
//   type: TOGGLE_CART_HIDDEN
// })

export const toggleCartHidden = () => {
  console.log("toggle")
  return {
    type: TOGGLE_CART_HIDDEN
  }
}
