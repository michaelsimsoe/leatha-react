import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/header/Header';
import { Products } from './pages/products';
import { Product } from './pages/product';
import { CartPage } from './pages/cart';
import { Checkout } from './pages/checkout';
import { Footer } from './components/Footer';
import { PromotionTopBar } from './components/promotionTopBar';
import { MainContainer } from './components/mainContainer';
import { Contact } from './pages/contact';
import { About } from './pages/about';
import { MobileMenu } from './components/mobileMenu';

function App() {
  return (
    <Router>
      <PromotionTopBar />
      <MainContainer>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </MainContainer>
      <MobileMenu />
    </Router>
  );
}

export default App;
