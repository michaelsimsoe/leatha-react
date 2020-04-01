import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';

import { ProductInfo } from './productinfo';

export const Product = () => {
  const state = useSelector(state => state);
  const location = useLocation();
  const productId = location.pathname.match(/\d+/g);
  const product = state.products.find(product => product.id === +productId);

  if (!product) {
    return <Redirect to="/products" />;
  }

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
  const [showSpec, setShowSpec] = useState(false);

  return (
    <div className="row mt-mb-5 mt-1">
      <div className="col-sm-12 d-flex justify-content-center">
        <section className="shoe-product-information">
          <div className="tabs d-flex">
            <div
              onClick={() => setShowSpec(!showSpec)}
              className={`tab-tale p-2 ${showSpec ? '' : 'active'}`}
            >
              Tale of the {product.name}
            </div>
            <div
              onClick={() => setShowSpec(!showSpec)}
              className={`tab-spec p-2 ${showSpec ? 'active' : ''}`}
            >
              Specs of the shoes
            </div>
          </div>
          <div className="tab-text shoe-info-text p-md-5 p-1">
            <div className={`tale ${showSpec ? 'invisible-text' : ''}`}>
              <h3>{product.descriptionTitle}</h3>
              <p>{product.description}</p>
            </div>
            <div className={`spec ${showSpec ? '' : 'invisible-text'}`}>
              <h3>Specs</h3> <p> Good shoes </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
