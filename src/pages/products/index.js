import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from './productCard';

import { fetchProducts } from '../../actions';

export const Products = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="container shoes__products mt-5 d-flex justify-content-center flex-row">
      {state.products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};
