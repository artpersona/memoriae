import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const AppLink = (props) => {
    return (
      <>
        <NavLink
          {...props}
          className="menu__item"
          activeClassName="link__active"
          exact
        />
      </>
    );
  };

  const [toggle, setToggle] = useState(true);

  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="logo__container">
          <p className="logo">memoriae</p>
        </div>
        <div className={toggle ? 'menu': 'menu menu-active'}>
          <AppLink to="/">Home</AppLink>
          <AppLink to="/blogs">Blogs</AppLink>
          <AppLink to="/about">About</AppLink>
          <AppLink to="/contact">Contact Us</AppLink>
        </div>

        <div className="menu__toggle">
          <i
            className={toggle ? "fas fa-bars" : "fas fa-times"}
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
