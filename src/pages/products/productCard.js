import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = props => {
  return (
    <div className="card m-4">
      <img
        className="shoe-img img-fluid"
        src={props.product.imgUrl}
        alt="..."
      />
      <svg
        className="wishes"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 33 34.32"
      >
        <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
      </svg>
      <div className="name-price d-flex flex-column">
        <span>{props.product.name}</span> <span>{props.product.price}</span>
      </div>
      <Link
        to={`/product/${props.product.id}`}
        className="read-more btn btn-light shadow"
      >
        Read More
      </Link>
      <Link to="/cart" className="add-cart btn btn-light shadow">
        Add to cart
      </Link>
    </div>
  );
};
