import React from 'react';
import { Header } from '../../components/Header';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Footer } from '../../components/Footer';

export const Home = () => {
  return (
    <main className="container-fluid home">
      <Header />
      <Breadcrumbs />
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
          <a
            href="products.njk"
            className="btn btn-primary cta-btn home-intro__btn shadow"
          >
            Lets find
            <br />
            your shoe
          </a>
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
      <Footer />
    </main>
  );
};
