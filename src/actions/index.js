import {
  FETCH_PRODUCTS,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './types';

import { data } from '../api/api';

export const fetchProducts = () => {
  const fetchedProducts = data.shoes;
  return (dispatch, getState) => {
    const { products } = getState();
    if (products.length > 0) return;
    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        products: fetchedProducts,
      },
    });
  };
};

export const addToFavourites = product => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: {
      product,
    },
  };
};

export const removeFromFavourites = id => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: {
      id,
    },
  };
};

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product,
    },
  };
};
