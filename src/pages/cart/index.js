import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Basket } from './Basket';
import { CheckoutForm } from './CheckoutForm';
import { purchase } from '../../actions';

export const CartPage = () => {
  const dispatch = useDispatch();
  const [method, setMethod] = useState(null);
  const history = useHistory();

  const submitForm = data => {
    dispatch(purchase(method, data));
    history.push('/checkout');
  };
  const paymentMethod = method => {
    setMethod(method);
  };

  return (
    <div className="row mx-md-5 mx-1 mt-1 cart-col mx-auto">
      <div className="col-sm-12 p-md-5 p-2">
        <Basket />
        <div className="row mt-md-5">
          <CheckoutForm submit={submitForm} />
          <PaymentMethod paymentMethod={paymentMethod} />
        </div>
      </div>
    </div>
  );
};

function PaymentMethod(props) {
  const handleClick = method => {
    props.paymentMethod(method);
  };
  return (
    <div className="col-sm-6 p-md-5 p-1 payment-options mt-md-2">
      <div className="d-flex flex-column mt-2 mb-md-5 mb-2">
        <button
          form="cart-form"
          onClick={() => handleClick('ordinary')}
          type="submit"
          className="btn btn-warning btn-cta p-4 pay-btn"
        >
          PAY WITH
          <br />
          SUPER SIMPLE SERVICE
        </button>
        <small>It’s close to one-clikc payment.</small>
      </div>{' '}
      <div className="d-flex flex-column">
        <button
          form="cart-form"
          onClick={() => handleClick('express')}
          type="submit"
          className="btn btn-light p-4 pay-btn"
        >
          PAY WITH
          <br />
          CREDIT OR DEBIT CARD
        </button>
        <small>You will be sent over to your provider for a short trip.</small>
      </div>
    </div>
  );
}
