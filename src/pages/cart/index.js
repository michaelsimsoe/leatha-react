import React from 'react';

export const CartPage = () => {
  return (
    <div className="row mx-md-5 mx-1 mt-1 cart-col mx-auto">
      <div className="col-sm-12 p-md-5 p-2">
        <div className="row">
          <div className="col-sm-12">
            <section className="cart-info p-md-5 p-1">
              <h2>You are about to aquire:</h2>
              <h4>One pair of sized 44 Mountain Jacks</h4>
              <h4>
                Total $449 <span>Delievery is on us</span>
              </h4>
              <p>
                <span>Pro tip: </span> If you register for an account on
                checkout we will hook you up with a sweet 10% discount on this
                purchase.
              </p>
            </section>
          </div>
        </div>
        <div className="row mt-md-5">
          <div className="col-sm-6 p-5">
            <form id="cart-fort">
              <div className="form-group">
                <label for="first-name">First name</label>
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
                <label for="last-name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeholder="Your last name"
                  pattern=".{1,}"
                  required=""
                />
                <span id="cart-lname-message" className="cart-error-message">
                  ⚠ We need your last name.
                </span>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
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
                  (In order to send your receipt. We promise not to share it.)
                </small>
                <span id="cart-email-message" className="cart-error-message">
                  ⚠ This email address doesn't look right.
                </span>
              </div>
              <div className="form-group">
                <label for="address">Address</label>
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
                <label for="city">City</label>
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
                <label for="postal-code">Postal code</label>
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
              <small>
                You will be sent over to your provider for a short trip.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
