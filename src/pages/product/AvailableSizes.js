import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function AvailableSizes(props) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    props.chosenSize(active);
    if (props.unselect) {
      console.log(props.unselect);
      setActive(null);
    }
  }, [props, active, props.unselect]);

  const handleSetSize = size => {
    setActive(size);
  };
  return (
    <div className="sizes">
      <h4>Available Sizes</h4>
      <div className="d-flex mb-4 flex-wrap flex-row">
        {props.sizes.map(size => {
          return (
            <div
              onClick={() => handleSetSize(size)}
              key={size}
              className={`size m-2 mt-4 p-2 shadow ${
                active === size ? 'current' : ''
              }`}
            >
              {size}
              <span>Your size</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

AvailableSizes.propTypes = {
  chosenSize: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  unselect: PropTypes.bool,
};
