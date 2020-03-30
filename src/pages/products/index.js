import React from 'react';
import { Header } from '../../components/Header';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Footer } from '../../components/Footer';

export const Products = () => {
  return (
    <main className="container-fluid shoes">
      <Header />
      <Breadcrumbs />
      <section className="container shoes__products mt-5 d-flex justify-content-center flex-row">
        <div className="card m-4">
          <img
            className="shoe-img img-fluid"
            src="img/lonesomewalkers.jpg"
            alt="..."
          />
          <svg
            className="wishes"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 34.32"
          >
            <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
          </svg>
          <div className="name-price d-flex flex-column">
            <span>Lonesome Walkers</span> <span>$399</span>
          </div>
          <a href="./shoes.html" className="read-more btn btn-light shadow">
            Read More
          </a>
          <a href="./cart.html" className="add-cart btn btn-light shadow">
            Add to cart
          </a>
        </div>
        <div className="card m-4">
          <img
            className="shoe-img img-fluid"
            src="img/roughplayers.jpg"
            alt="..."
          />
          <svg
            className="wishes"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 34.32"
          >
            <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
          </svg>
          <div className="name-price d-flex flex-column">
            <span>Rough Players</span> <span>$449</span>{' '}
          </div>
          <a href="./shoes.html" className="read-more btn btn-light shadow">
            Read More
          </a>
          <a href="./cart.html" className="add-cart btn btn-light shadow">
            Add to cart
          </a>
        </div>
        <div className="card m-4">
          <img
            className="shoe-img img-fluid"
            src="img/cowboots.jpg"
            alt="..."
          />
          <svg
            className="wishes"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 34.32"
          >
            <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
          </svg>
          <div className="name-price d-flex flex-column">
            <span>Cowboots Delight</span> <span>$510</span>{' '}
          </div>
          <a href="./shoes.html" className="read-more btn btn-light shadow">
            Read More
          </a>
          <a href="./cart.html" className="add-cart btn btn-light shadow">
            Add to cart
          </a>
        </div>
        <div className="card m-4">
          <img
            className="shoe-img img-fluid"
            src="img/mountainjacks1.jpg"
            alt="..."
          />
          <svg
            className="wishes"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 34.32"
          >
            <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
          </svg>
          <div className="name-price d-flex flex-column">
            <span>Mountain Jacks</span> <span>$499</span>{' '}
          </div>
          <a href="./shoes.html" className="read-more btn btn-light shadow">
            Read More
          </a>
          <a href="./cart.html" className="add-cart btn btn-light shadow">
            Add to cart
          </a>
        </div>
        <div className="card m-4">
          <img className="shoe-img img-fluid" src="img/loafers.jpg" alt="..." />
          <svg
            className="wishes"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 34.32"
          >
            <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
          </svg>
          <div className="name-price d-flex flex-column">
            <span>Loafer ClassNameic</span> <span>$449</span>
          </div>
          <a href="./shoes.html" className="read-more btn btn-light shadow">
            Read More
          </a>
          <a href="./cart.html" className="add-cart btn btn-light shadow">
            Add to cart
          </a>
        </div>
        <div className="card m-4">
          <img
            className="shoe-img img-fluid"
            src="img/lethadancers.jpg"
            alt="..."
          />
          <svg
            className="wishes"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 34.32"
          >
            <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
          </svg>
          <div className="name-price d-flex flex-column">
            <span>Letha Dancers</span> <span>$299</span>
          </div>
          <a href="./shoes.html" className="read-more btn btn-light shadow">
            Read More
          </a>
          <a href="./cart.html" className="add-cart btn btn-light shadow">
            Add to cart
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};
