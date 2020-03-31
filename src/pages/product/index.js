import React from 'react';
import { useLocation } from 'react-router-dom';
import { data } from '../../api/api';

export const Product = () => {
  const location = useLocation();
  const productId = location.pathname.match(/\d+/g);
  const product = data.shoes.find(product => product.id === +productId);
  return (
    <div className="row mt-md-5 mt-1 d-flex justify-content-center">
      <div className="col-sm-12 single-shoe mx-md-5">
        <ProductInfo product={product} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
};
function ProductDescription({ product }) {
  return (
    <div className="row mt-mb-5 mt-1">
      <div className="col-sm-12 d-flex justify-content-center">
        <section className="shoe-product-information">
          <div className="tabs d-flex">
            <div className="tab-tale active p-2">
              Tale of the {product.name}
            </div>
            <div className="tab-spec p-2">Specs of the shoes</div>
          </div>
          <div className="tab-text shoe-info-text p-md-5 p-1">
            <div className="tale">
              <h3>{product.descriptionTitle}</h3>
              <p>{product.description}</p>
            </div>
            <div className="spec invisible-text">
              <h3>Specs</h3> <p> Good shoes </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ProductInfo(props) {
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
              className="wish mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33 34.32"
            >
              <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
            </svg>
            <span>
              <span className="wishadd">Add</span>
              <span lass="wishadded">Added</span> to wishlist
            </span>
          </div>
          <div className="info-text">
            <p>{props.product.shortFrase}</p>
          </div>
          <AvailableSizes sizes={props.product.availableSizes} />
          <button className="btn btn-light shadow">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
function AvailableSizes(props) {
  return (
    <div className="sizes">
      <h4>Available Sizes</h4>
      <div className="d-flex mb-4 flex-wrap flex-row">
        {props.sizes.map(size => {
          return (
            <div key={size} className="size m-2 mt-4 p-2 shadow">
              {size}
              <span>Your size</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
