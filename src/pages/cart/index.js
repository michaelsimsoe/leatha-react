import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Basket } from './Basket';

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

function CheckoutForm() {
  return (
    <div className="col-sm-6 p-5">
      <form id="cart-fort">
        <div className="form-group">
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            placeholder="Your first name"
            pattern=".{1,}"
            required=""
          />
          <span id="cart-fname-message" className="cart-error-message">
            ⚠ We need your first name.
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            placeholder="Your last name"
            pattern=".{1,}"
            required=""
          />
          <span id="cart-lname-message" className="cart-error-message">
            need your last name.
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            pattern=".{1,}"
            required=""
          />{' '}
          <small id="emailHelp" className="form-text">
            (In order to send your receipt.We promise not to share it.)
          </small>
          <span id="cart-email-message" className="cart-error-message">
            ⚠ This email address doesn't look right.
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Your address"
            pattern=".{1,}"
            required=""
          />
          <span id="cart-address-message" className="cart-error-message">
            ⚠ We really need your address.
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Your city"
            pattern=".{1,}"
            required=""
          />
          <span id="cart-city-message" className="cart-error-message">
            ⚠ We really need to know the city.
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="postal-code">Postal code</label>
          <input
            type="text"
            className="form-control"
            id="postal-code"
            placeholder="Your postal code"
            pattern=".{1,}"
            required=""
          />
          <span id="cart-postal-message" className="cart-error-message">
            ⚠ We really need to know your postal code.
          </span>
        </div>
      </form>
    </div>
  );
}
