import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AvailableSizes } from './AvailableSizes';

import {
  addToFavourites,
  removeFromFavourites,
  addToCart,
} from '../../actions';

export const ProductInfo = props => {
  const [active, setActive] = useState(false);
  const [size, setSize] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const productIsFavourited = state.favourites.filter(
      product => product.id === props.product.id
    );
    setActive(productIsFavourited.length);
  }, [state, props.product.id, size, addedToCart]);

  const handleFavouriteClick = () => {
    if (!active) {
      dispatch(addToFavourites(props.product));
    } else {
      dispatch(removeFromFavourites(props.product.id));
    }
  };

  const handleAddToCart = () => {
    if (size) {
      dispatch(addToCart(props.product, size));
      setAddedToCart(true);
      setSize(null);
    }
  };

  const added = active ? (
    <span>
      <span lass="wishadded">Added</span> to wishlist
    </span>
  ) : (
    <span className="wishadd">Add</span>
  );

  const handleChosenSize = size => {
    setSize(size);
    setAddedToCart(false);
  };

  return (
    <div className="shoe-info p-md-5 p-1">
      <div className="row">
        <div className="d-none d-sm-block col-sm-2">
          {props.product.thumbnails.map(img => {
            return (
              <img
                key={img}
                className="img-thumbnail mb-5"
                src={`../${img}`}
                alt=""
              />
            );
          })}
        </div>
        <div className="col-md-6 col-sm-12 shoe-photo">
          <img
            className="img-fluid"
            src={`../${props.product.imgUrl}`}
            alt={`${props.product.name}'s`}
          />
        </div>
        <div className="col-md-4 col-sm-12 mb-3 mb-sm-0">
          <h3>{props.product.name}</h3>
          <h4>${props.product.price}</h4>
          <div className="wishlist d-flex mb-4">
            <svg
              onClick={handleFavouriteClick}
              className={`wish mr-3" ${active ? 'favourited' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33 34.32"
            >
              <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
            </svg>
            <span>{added}</span>
          </div>
          <div className="info-text">
            <p>{props.product.shortFrase}</p>
          </div>
          <AvailableSizes
            chosenSize={handleChosenSize}
            sizes={props.product.availableSizes}
            unselect={addedToCart}
          />
          <button onClick={handleAddToCart} className="btn btn-light shadow">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
