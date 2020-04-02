import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import cartSvg from './cart.svg';
import favSvg from './fav.svg';
import loginSvg from './login.svg';
import searchSvg from './search.svg';

export const Header = () => {
  const location = useLocation();

  const headerTitle = setHeaderTitle(location);
  return (
    <header className="main-header row px-3">
      <div id="bg-blur" className="d-none d-sm-block"></div>
      <div id="bg-white" className="d-none d-sm-block"></div>
      <div className="col-sm d-flex justify-content-between">
        <Link className="main-header__logo" to="/">
          <h1 className="main-header__logo__text">Letha</h1>
        </Link>
        <h2 className="d-none d-sm-block main-header__page-title align-self-end">
          {headerTitle}
        </h2>
      </div>
      <nav className="d-flex align-items-center col-sm main-header__nav">
        <MainMenu />
        <SubMenu />
      </nav>
    </header>
  );
};

function MainMenu() {
  return (
    <div className="main-header__nav-top">
      <div className="d-flex align-items-center nav-main">
        <Link className="mr-4" to="/products">
          All Shoes
        </Link>
        <Link className="mr-4" to="/">
          Blog
        </Link>
      </div>
      <div className="d-flex align-items-center nav-tools">
        <Link className="ml-4" to="/">
          <img src={searchSvg} alt="magnifying glass" />
          <span>Search</span>
        </Link>
        <Link className="ml-4" to="/">
          <img src={favSvg} alt="hearth" />
          <span>Wishlist</span>
        </Link>
        <Link className="ml-4" to="/cart">
          <img src={cartSvg} alt="cart" />
          <span>Cart</span>
        </Link>
        <Link className="ml-4" to="/">
          <img src={loginSvg} alt="login" />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
}

function SubMenu() {
  return (
    <div className="main-header__nav-bottom">
      <Link className="d-none d-sm-block" to="/contact">
        Customer Service
      </Link>
      <Link className="" to="/contact">
        Contact
      </Link>
      <Link className="" to="/about">
        About
      </Link>
    </div>
  );
}

function setHeaderTitle(location) {
  switch (location.pathname) {
    case '/':
      return '';
    case '/products':
      return 'All Shoes';
    case '/cart':
      return 'Cart';
    case '/checkout':
      return 'Checkout';
    case 'product':
      return 'A Leatha Shoe';
    case '/contact':
      return 'Contact';
    case '/about':
      return 'About Letha';
    default:
      return '';
  }
}
