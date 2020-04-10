import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addToFavourites, removeFromFavourites } from '../../actions';

export const ProductCard = props => {
  const [active, setActive] = useState(false);
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const productIsFavourited = state.favourites.filter(
      product => product.id === props.product.id
    );
    setActive(productIsFavourited.length);
  }, [state, props.product.id]);

  const handleClick = () => {
    if (!active) {
      dispatch(addToFavourites(props.product));
    } else {
      dispatch(removeFromFavourites(props.product.id));
    }
    setActive(!active);
  };

  return (
    <div className="card m-4">
      <img
        className="shoe-img img-fluid"
        src={props.product.imgUrl}
        alt="..."
      />
      <svg
        onClick={handleClick}
        className={`wishes ${active ? 'favourited' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 34.32"
      >
        <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
      </svg>
      <div className="name-price d-flex flex-column">
        <span>{props.product.name}</span> <span>{props.product.price}</span>
      </div>
      <Link
        to={`/products/${props.product.id}`}
        className="read-more btn btn-light shadow"
      >
        Read More
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
