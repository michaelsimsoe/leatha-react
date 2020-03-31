import React from 'react';

export const Checkout = () => {
  return (
    <div className="row mx-5 mt-5 checkout-col mx-auto">
      <div className="col-sm-12 p-md-5 p-2">
        <section className="order-comfirmation d-flex flex-column justify-content-center align-items-center">
          <h1>Congratulations!</h1>
          <h2 className="mt-md-4 mt-1">
            A beautiful pair of shoes are on its way to you!
          </h2>
          <h3>Receipt is sent to your email.</h3>
          <div className="mt-md-5 mt-1">
            <p>
              Should there be any issues,
              <br />
              seriously anything at all,
              <br />
              just use the premarked return
              <br />
              bag and send them back.
              <br />
              Easy as that.
            </p>
          </div>
          <div className="d-flex flex-column align-items-center mt-md-5 mt-1">
            <p>Do you want to register a user?</p>
            <p>
              We can just use the info you typed in during the order. You will
              get a 10% discount to this order.
            </p>
          </div>
          <div className="d-flex justify-content-between register-options mt-md-5 mt-1">
            <div className="d-flex flex-column mr-2">
              <a href="./products.html" className="btn btn-warning btn-cta p-2">
                Yes, that sounds great
              </a>
              <small>Perfect! We’ll send you a comfirmation email.</small>
            </div>
            <div className="d-flex flex-column ml-2">
              <a
                href="./products.html"
                className="btn btn-warning btn-light p-2"
              >
                Not not. Just go back to the store.
              </a>
              <small>
                No worries. We’ll discard your info. Maybe next time?
              </small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
