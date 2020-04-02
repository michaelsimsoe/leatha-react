import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';

import { ProductInfo } from './ProductInfo';
import { ProductDescription } from './ProductDescription';

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
