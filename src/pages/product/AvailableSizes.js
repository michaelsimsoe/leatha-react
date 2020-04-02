import React, { useState, useEffect } from 'react';

export function AvailableSizes(props) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    props.chosenSize(active);
  }, [props, active]);
  return (
    <div className="sizes">
      <h4>Available Sizes</h4>
      <div className="d-flex mb-4 flex-wrap flex-row">
        {props.sizes.map(size => {
          return (
            <div
              onClick={() => setActive(size)}
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