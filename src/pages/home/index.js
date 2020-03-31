import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section className="home-intro row">
      <div id="bg-blur"></div>
      <div id="bg-white"></div>
      <section className="col-sm">
        <ul className="home-intro__catch-phrase-one">
          <li>Handmade</li>
          <li>Organic</li>
          <li>Sustainable</li>
          <li>Leather Shoes</li>
        </ul>
      </section>
      <section className="col-sm">
        <Link
          to="/products"
          className="btn btn-primary cta-btn home-intro__btn shadow"
        >
          Lets find
          <br />
          your shoe
        </Link>
      </section>
      <section className="col-sm d-none d-sm-block">
        <ul className="home-intro__catch-phrase-two">
          <li>Together we'll find the perfect shoe.</li>
          <li>For your foot.</li>
          <li>For your taste.</li>
          <li>For your life.</li>
        </ul>
      </section>
    </section>
  );
};
