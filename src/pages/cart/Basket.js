import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function Basket() {
  const state = useSelector(state => state);

  if (state.cart.length < 1) return <Redirect to="/products" />;

  const productsInCart = state.cart.map(({ product, size }, index) => {
    return (
      <h4 key={product.name + size + index}>
        One pair of sized {size} {product.name} - ${product.price}
      </h4>
    );
  });

  const totalPrice = state.cart
    .map(({ product }) => product.price)
    .reduce((prev, next) => {
      return prev + next;
    }, 0);
  return (
    <div className="row">
      <div className="col-sm-12">
        <section className="cart-info p-md-5 p-1">
          {<h2>You are about to aquire:</h2>}
          {productsInCart}
          <h4>
            Total ${totalPrice} <span>Delievery is on us</span>
          </h4>
          <p>
            <span>Pro tip: </span> If you register for an account on checkout we
            will hook you up with a sweet 10% discount on this purchase.
          </p>
        </section>
      </div>
    </div>
  );
}
