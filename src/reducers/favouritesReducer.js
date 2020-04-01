import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.payload.product];
    case REMOVE_FROM_FAVOURITES:
      return state.filter(product => product.id !== action.payload.id);
    default:
      return state;
  }
};
