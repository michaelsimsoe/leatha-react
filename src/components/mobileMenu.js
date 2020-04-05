import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  let location = useLocation();
  let currentLocation = location.pathname;

  useEffect(() => {
    setOpen(false);
  }, [currentLocation]);

  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <MainMenu open={open} />
      <nav className="d-flex navbar-mobile .d-block .d-sm-none">
        <Link
          to="/"
          className="mobile-nav_logo flex-fill d-flex flex-column justify-content-center"
        >
          Letha
        </Link>
        <Link
          to="/products"
          className="mobile-nav_shoes flex-fill d-flex flex-column justify-content-center"
        >
          Shoes
        </Link>
        <Link to="/cart" className="flex-fill d-flex flex-column">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 33">
            <g id="icon-1641920" transform="translate(1.5 1.5)">
              <path
                id="Path_2"
                data-name="Path 2"
                style={{
                  fill: 'none',
                  strokeWidth: '3px',
                }}
                className="cls-1"
                d="M38.064,16.405H31.823A7.021,7.021,0,0,1,32.36,18.5a.954.954,0,0,1-.138,1.725,1.024,1.024,0,0,1-.834-.035.964.964,0,0,1-.544-.861.951.951,0,0,1,.36-.741,5.931,5.931,0,0,0-.651-2.182H22.18a5.916,5.916,0,0,0-.651,2.183.951.951,0,0,1,.359.74.965.965,0,0,1-.545.861,1.023,1.023,0,0,1-.833.035.954.954,0,0,1-.136-1.726,7.022,7.022,0,0,1,.537-2.093H14.665l-.8,24.776a1.577,1.577,0,0,0,1.6,1.551h21.8a1.577,1.577,0,0,0,1.6-1.551Z"
                transform="translate(-13.865 -12.732)"
              />
              <path
                id="Path_3"
                data-name="Path 3"
                className="cls-1"
                d="M33.453,12.291a.421.421,0,0,0,.425-.392l0-.039C33.9,8.776,36.151,6.267,38.9,6.267s5,2.511,5.021,5.6l0,.034a.427.427,0,0,0,.85,0l0-.036C44.745,8.321,42.11,5.44,38.9,5.44c-3.226,0-5.862,2.885-5.873,6.459a.421.421,0,0,0,.425.392Z"
                transform="translate(-26.399 -5.44)"
              />
            </g>
          </svg>
          <span>Cart</span>
        </Link>
        {/* <Link to="/" className="activeflex-fill d-flex flex-column">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.786 32.982">
          <defs></defs>
          <g id="icon-2755160" transform="translate(1.5 1.502)">
            <path
              id="Path_7"
              data-name="Path 7"
              style={{
                fill: 'none',
                stroke: `#fff`,
                strokeWidth: '3px',
              }}
              className="cls-1"
              d="M291.45,265.438a2.268,2.268,0,0,1,.67.205,5.716,5.716,0,0,0,.891.486,4.666,4.666,0,0,1,1.247.846,8.417,8.417,0,0,0,.667.653,9.926,9.926,0,0,1,1.9,3.466,2.343,2.343,0,0,0,.44,1.2,13.966,13.966,0,0,1-.023,3.678,5.639,5.639,0,0,0-.568,1.528,7.425,7.425,0,0,1-.5,1.227,5.479,5.479,0,0,0-.34.713,7.126,7.126,0,0,1-1.857,2.023l-.842.621,0,.615a1.058,1.058,0,0,0,.441,1.054,5.521,5.521,0,0,0,1.158.779,3.172,3.172,0,0,1,.813.508,1.138,1.138,0,0,0,.535.305,7.1,7.1,0,0,1,1.805.973,1.526,1.526,0,0,0,.457.271,4.614,4.614,0,0,1,.835.508,4.942,4.942,0,0,0,.847.508c.056,0,.134.1.178.214a.833.833,0,0,0,.311.382,7.383,7.383,0,0,1,1.594,2.592,5.571,5.571,0,0,0,.5,1.132c.2.27.265.583.347,1.668.1,1.309.092,1.331-.155,1.531s-.762.208-12.411.158c-6.674-.03-12.286-.054-12.454-.066-.492-.025-.747-.329-.744-.888.008-1.241.432-3.049.712-3.059.056,0,.09-.089.091-.2a7.885,7.885,0,0,1,1.132-2.24,6.507,6.507,0,0,1,1.687-1.655,8.358,8.358,0,0,1,.9-.531,12.811,12.811,0,0,0,1.178-.675,13.354,13.354,0,0,1,1.29-.7,1.824,1.824,0,0,0,.449-.232,10.091,10.091,0,0,1,1.066-.642c1.279-.719,1.515-.986,1.52-1.768,0-.559-.008-.593-.464-.9a10.592,10.592,0,0,1-1.911-1.879,8.566,8.566,0,0,1-1.1-2.589,1.094,1.094,0,0,0-.231-.549c-.356-.293-.6-2.709-.378-3.915a6.218,6.218,0,0,1,.354-1.217,4.086,4.086,0,0,0,.285-.837,8.815,8.815,0,0,1,2.1-3.464,5.819,5.819,0,0,1,1.965-1.318,2.263,2.263,0,0,0,.606-.343,5.894,5.894,0,0,1,1.958-.312C290.635,265.321,291.115,265.38,291.45,265.438Z"
              transform="translate(-277.185 -265.308)"
            />
          </g>
        </svg>
        <span>Login</span>
      </Link>
     */}
        <button
          onClick={openMenu}
          style={{ all: 'unset', color: '#fff' }}
          className="flex-fill d-flex"
        >
          Menu
        </button>
      </nav>
    </>
  );
};

function MainMenu(props) {
  const menuStyle = {
    backgroundColor: '#1d364de0',
    fontSize: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '76px',
    width: '100%',
    height: 'calc(100vh - 76px)',
    transition: 'transform .3s ease',
    transform: props.open ? 'translateX(0%)' : 'translateX(100%)',
  };

  const open = {
    transform: 'translateY(0%)',
  };

  const closed = {
    transform: 'translateY(100%)',
  };

  const linkStyles = {
    color: '#fff',
    marginBottom: '1em',
  };
  return (
    <div style={menuStyle}>
      <Link to="/products" style={linkStyles}>
        All Shoes
      </Link>
      <Link to="/about" style={linkStyles}>
        About
      </Link>
      <Link to="/about" style={linkStyles}>
        Blog
      </Link>
      <Link to="/contact" style={linkStyles}>
        Contact
      </Link>
      <Link to="/wishlist" style={linkStyles}>
        Wishlist
      </Link>
    </div>
  );
}
