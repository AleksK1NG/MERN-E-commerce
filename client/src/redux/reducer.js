import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from '../storeModules/auth/authReducer'
import uiReducer from '../storeModules/ui/uiReducer'
import cartReducer from '../storeModules/cart/cartReducer'
import shopReducer from '../storeModules/shop/shopReducer'
import history from '../history'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  cart: cartReducer,
  shop: shopReducer,
  router: connectRouter(history)
})

export default persistReducer(persistConfig, rootReducer)
