import { combineReducers } from 'redux';
import favouritesReducer from './favouritesReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  products: productsReducer,
  favourites: favouritesReducer,
  cart: cartReducer,
});
