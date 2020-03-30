import React from 'react';
// import { Home } from './pages/home';
import { Checkout } from './pages/checkout';

function App() {
  return (
    <>
      <div className="top-bar px-4">
        <div className="top-bar__promotion">
          <p>No fit? No Problem! - Free returns within 60 days!</p>
        </div>
        <div className="top-bar__promotion d-none d-sm-block">
          <p>Free shipping. Of course.</p>
        </div>
      </div>
      <Checkout />
    </>
  );
}

export default App;
