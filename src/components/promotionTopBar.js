import React from 'react';

export const PromotionTopBar = () => {
  return (
    <div className="top-bar px-4">
      <div className="top-bar__promotion">
        <p>No fit? No Problem! - Free returns within 60 days!</p>
      </div>
      <div className="top-bar__promotion d-none d-sm-block">
        <p>Free shipping. Of course.</p>
      </div>
    </div>
  );
};
