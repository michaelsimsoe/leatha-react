import {} from './productCard';
import React from 'react';
import { data } from '../../api/api';
import { ProductCard } from './productCard';

export const Products = () => {
  return (
    <section className="container shoes__products mt-5 d-flex justify-content-center flex-row">
      {data.shoes.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
};
