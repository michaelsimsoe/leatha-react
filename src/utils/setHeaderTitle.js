export function setHeaderTitle(location) {
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
