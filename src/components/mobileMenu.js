import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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
        <NavLink
          activeClassName="active"
          exact
          to="/"
          className="mobile-nav_logo flex-fill d-flex flex-column justify-content-center"
        >
          Letha
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/products"
          className="mobile-nav_shoes flex-fill d-flex flex-column justify-content-center"
        >
          Shoes
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/cart"
          className="flex-fill d-flex flex-column"
        >
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
        </NavLink>
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

  const linkStyles = {
    color: '#fff',
    marginBottom: '1em',
  };
  return (
    <div style={menuStyle}>
      <NavLink
        activeClassName="active-navlink"
        to="/products"
        style={linkStyles}
      >
        All Shoes
      </NavLink>
      <NavLink activeClassName="active-navlink" to="/about" style={linkStyles}>
        About
      </NavLink>
      <NavLink activeClassName="active-navlink" to="/blog" style={linkStyles}>
        Blog
      </NavLink>
      <NavLink
        activeClassName="active-navlink"
        to="/contact"
        style={linkStyles}
      >
        Contact
      </NavLink>
      <NavLink
        activeClassName="active-navlink"
        to="/wishlist"
        style={linkStyles}
      >
        Wishlist
      </NavLink>
    </div>
  );
}
