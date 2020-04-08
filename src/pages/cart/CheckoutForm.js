import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('⚠ We need your first name.'),
  lastName: yup.string().required('⚠ We need your last name.'),
  email: yup
    .string()
    .email("⚠ This email address doesn't look right.")
    .required('⚠ We need it for receipts and such.'),
  address: yup.string().required('⚠ We really need your address.'),
  city: yup.string().required('⚠ We really need to know the city.'),
  postalCode: yup
    .string()
    .required('⚠ We really need to know your postal code.'),
});

export function CheckoutForm(props) {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = data => {
    console.log(data);
    props.submit(data);
  };

  return (
    <div className="col-sm-6 p-5">
      <form id="cart-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Your first name"
            ref={register}
          />
          {errors.firstName && (
            <span id="cart-fname-message" className="cart-error-message">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Your last name"
            ref={register}
          />
          {errors.lastName && (
            <span id="cart-fname-message" className="cart-error-message">
              {errors.lastName.message}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={register}
          />{' '}
          <small id="emailHelp" className="form-text">
            (In order to send your receipt.We promise not to share it.)
          </small>
          {errors.email && (
            <span id="cart-fname-message" className="cart-error-message">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="adress">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Your address"
            ref={register}
          />
          {errors.adress && (
            <span className="cart-error-message">{errors.adress.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="Your city"
            ref={register}
          />
          {errors.city && (
            <span className="cart-error-message">{errors.city.message}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal code</label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            name="postalCode"
            placeholder="Your postal code"
            ref={register}
          />
          {errors.postalCode && (
            <span className="cart-error-message">
              {errors.postalCode.message}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
