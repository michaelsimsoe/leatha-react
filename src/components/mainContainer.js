import React from 'react';
import { useLocation } from 'react-router-dom';

export const MainContainer = ({ children }) => {
  const location = useLocation();
  console.log();
  const locationClassName = classNameByLocation(location);
  return (
    <main className={`container-fluid ${locationClassName}`}>{children}</main>
  );
};

function classNameByLocation(location) {
  if (location.pathname.includes('/product/')) {
    return 'shoe';
  }
  switch (location.pathname) {
    case '/':
      return 'home';
    case '/products':
      return 'shoes';
    case '/cart':
      return 'cart';
    case '/checkout':
      return 'checkout';
    case '/product':
      return 'shoe';
    case '/contact':
      return 'contact';
    case '/about':
      return 'about';
    default:
      return '';
  }
}
