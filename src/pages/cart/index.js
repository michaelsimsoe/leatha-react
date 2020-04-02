import React from 'react';
import { Basket } from './Basket';
import { CheckoutForm } from './CheckoutForm';

export const CartPage = () => {
  return (
    <div className="row mx-md-5 mx-1 mt-1 cart-col mx-auto">
      <div className="col-sm-12 p-md-5 p-2">
        <Basket />
        <div className="row mt-md-5">
          <CheckoutForm />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
};

function PaymentMethod() {
  return (
    <div className="col-sm-6 p-md-5 p-1 payment-options mt-md-2">
      <div className="d-flex flex-column mt-2 mb-md-5 mb-2">
        <a
          href="./checkout.html"
          className="btn btn-warning btn-cta p-4 pay-btn"
        >
          PAY WITH
          <br />
          SUPER SIMPLE SERVICE
        </a>
        <small>It’s close to one-clikc payment.</small>
      </div>{' '}
      <div className="d-flex flex-column">
        <a href="./checkout.html" className="btn btn-light p-4 pay-btn">
          PAY WITH
          <br />
          CREDIT OR DEBIT CARD
        </a>
        <small>You will be sent over to your provider for a short trip.</small>
      </div>
    </div>
  );
}
