import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function ProductDescription({ product }) {
  const [showSpec, setShowSpec] = useState(false);
  return (
    <div className="row mt-mb-5 mt-1">
      <div className="col-sm-12 d-flex justify-content-center">
        <section className="shoe-product-information">
          <div className="tabs d-flex">
            <div
              onClick={() => setShowSpec(!showSpec)}
              className={`tab-tale p-2 ${showSpec ? '' : 'active'}`}
            >
              Tale of the {product.name}
            </div>
            <div
              onClick={() => setShowSpec(!showSpec)}
              className={`tab-spec p-2 ${showSpec ? 'active' : ''}`}
            >
              Specs of the shoes
            </div>
          </div>
          <div className="tab-text shoe-info-text p-md-5 p-1">
            <div className={`tale ${showSpec ? 'invisible-text' : ''}`}>
              <h3>{product.descriptionTitle}</h3>
              <p>{product.description}</p>
            </div>
            <div className={`spec ${showSpec ? '' : 'invisible-text'}`}>
              <h3>Specs</h3> <p> Good shoes </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

ProductDescription.propTypes = {
  product: PropTypes.object.isRequired,
};
