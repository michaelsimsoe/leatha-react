import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        { product: action.payload.product, size: action.payload.size },
      ];
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.payload.id);
    default:
      return state;
  }
};
