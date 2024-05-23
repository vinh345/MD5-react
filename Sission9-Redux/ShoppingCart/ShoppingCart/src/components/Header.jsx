import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Minicart from "./Minicart";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="header">
      <h1>Product Store</h1>
      <NavLink to="/"> Home</NavLink>

      <div className="mini-cart-container">
        <NavLink to="/cart"> Cart ({cart.length})</NavLink>
        <div className="minicart">
          <Minicart />
        </div>
      </div>
    </header>
  );
};

export default Header;
