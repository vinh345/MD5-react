import React from "react";
import "../component/Header.css";
import { NavLink } from "react-router-dom";
import Home from "../controller/Home";
import Product from "../controller/Product";
import Category from "../controller/Category";

export default function Header() {
  return (
    <div>
      <div className=" header">
        <h2>Đây là header</h2>
        <div className="navbar">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/category"}>Category</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
          <NavLink to={"/productApi"}>ProductApi</NavLink>
        </div>
      </div>
    </div>
  );
}
