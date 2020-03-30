import React from 'react';
import { Header } from '../../components/Header';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Footer } from '../../components/Footer';

export const Product = () => {
  return (
    <main class="container-fluid shoe">
      <Header />
      <Breadcrumbs />
      <div class="row mt-md-5 mt-1 d-flex justify-content-center">
        <div class="col-sm-12 single-shoe mx-md-5">
          <div class="shoe-info p-md-5 p-1">
            <div class="row">
              <div class="d-none d-sm-block col-sm-2">
                <img
                  class="img-thumbnail mb-5"
                  src="img/mountainjacks2.jpg"
                  alt=""
                />
                <img
                  class="img-thumbnail"
                  src="img/mountainjacks3.jpg"
                  alt=""
                />
              </div>
              <div class="col-md-6 col-sm-12 shoe-photo">
                <img class="img-fluid" src="img/mountainjacks1.jpg" alt="" />
              </div>
              <div class="col-md-4 col-sm-12 mb-3 mb-sm-0">
                <h3>Mountain Jacks</h3>
                <h4>$499</h4>
                <div class="wishlist d-flex mb-4">
                  <svg
                    class="wish mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 34.32"
                  >
                    <path d="M9.38 1.5c-4.347 0-7.875 3.81-7.875 8.5 0 9.55 8.921 12.054 15 21.5 5.747-9.383 15-12.251 15-21.5 0-4.694-3.528-8.5-7.875-8.5a7.859 7.859 0 0 0-7.125 4.9A7.859 7.859 0 0 0 9.38 1.5z"></path>
                  </svg>
                  <span>
                    <span class="wishadd">Add</span>
                    <span lass="wishadded">Added</span> to wishlist
                  </span>
                </div>
                <div class="info-text">
                  <p>
                    Made from the most water resistant cows known to man. Enter
                    the mountain with pride.
                  </p>
                </div>
                <div class="sizes">
                  <h4>Available Sizes</h4>
                  <div class="d-flex mb-4 flex-wrap flex-row">
                    <div class="size m-2 mt-4 p-2 shadow">
                      39<span>Your size</span>
                    </div>
                    <div class="size m-2 mt-4 p-2 shadow">
                      40<span>Your size</span>
                    </div>
                    <div class="size m-2 mt-4 p-2 shadow">
                      41<span>Your size</span>
                    </div>
                    <div class="size m-2 mt-4 p-2 shadow">
                      42<span>Your size</span>
                    </div>
                    <div class="size m-2 mt-4 p-2 shadow">
                      43<span>Your size</span>
                    </div>
                    <div class="size m-2 mt-4 p-2 current shadow">
                      44 <span>Your size</span>
                    </div>
                    <div class="size m-2 mt-4 p-2 shadow">
                      45<span>Your size</span>
                    </div>
                    <div class="size m-2 mt-4 p-2 shadow">
                      46<span>Your size</span>
                    </div>
                  </div>
                </div>
                <a href="./cart.html" class="btn btn-light shadow">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="row mt-mb-5 mt-1">
            <div class="col-sm-12 d-flex justify-content-center">
              <section class="shoe-product-information">
                <div class="tabs d-flex">
                  <div class="tab-tale active p-2">
                    Tale of the Mountain Jacks
                  </div>
                  <div class="tab-spec p-2">Specs of the shoes</div>
                </div>
                <div class="tab-text shoe-info-text p-md-5 p-1">
                  <div class="tale">
                    <h3>Shoes for the mountainair by the mountainair</h3>
                    <p>
                      Our shoemakers know the mountain. They are well aware of
                      the requirements given by it. The Mountain Jacks will not
                      let you down, if it is a light hike or a week long act of
                      hardship. You will look stylish. You will be comfortable.
                      You will be well supported around your ankles, and your
                      feet will be dry. The Mountain Jacks are created by our
                      award winning shoemaker Reodor Felgen and is a true act of
                      passion. Felgen loves to make shoes and he loves the
                      mountain.
                    </p>
                  </div>
                  <div class="spec invisible-text">
                    <h3>Specs</h3> <p> Good shoes </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
