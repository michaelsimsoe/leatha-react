import React from 'react';

export const Header = () => {
  return (
    <header className="main-header row px-3">
      <div id="bg-blur" className="d-none d-sm-block"></div>
      <div id="bg-white" className="d-none d-sm-block"></div>
      <div className="col-sm d-flex justify-content-between">
        <a className="main-header__logo" href="index.njk">
          <h1 className="main-header__logo__text">Letha</h1>
        </a>
        <h2 className="d-none d-sm-block main-header__page-title align-self-end">
          HEADING
        </h2>
      </div>
      <nav className="d-flex align-items-center col-sm main-header__nav">
        <div className="main-header__nav-top">
          <div className="d-flex align-items-center nav-main">
            <a className="mr-4" href="/">
              All Shoes
            </a>
            <a className="mr-4" href="/">
              Blog
            </a>
          </div>
          <div className="d-flex align-items-center nav-tools">
            <a className="ml-4" href="./">
              <img src="img/search.svg" alt="magnifying glass" />
              <span>Search</span>
            </a>
            <a className="ml-4" href="./">
              <img src="img/fav.svg" alt="hearth" />
              <span>Wishlist</span>
            </a>
            <a className="ml-4" href="cart.njk">
              <img src="img/cart.svg" alt="cart" />
              <span>Cart</span>
            </a>
            <a className="ml-4" href="/">
              <img src="img/login.svg" alt="login" />
              <span>Login</span>
            </a>
          </div>
        </div>
        <div className="main-header__nav-bottom">
          <a className="d-none d-sm-block" href="contact.njk">
            Customer Service
          </a>
          <a className="" href="contact.njk">
            Contact
          </a>
          <a className="" href="about.njk">
            About
          </a>
        </div>
      </nav>
    </header>
  );
};
