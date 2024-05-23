import React from "react";
import { products } from "../data/product";
import { NavLink, Outlet } from "react-router-dom";

export default function Product() {
  return (
    <>
      {products.map((item, id) => {
        return (
          <div key={id}>
            <NavLink to={'details/'+ item.id}>
              <img src={item.image} alt="" />
              <h3> Name:{item.name}</h3>
              <h4>price :{item.price}</h4>
            </NavLink>
          </div>
        );
      })}
      <Outlet></Outlet>
    </>
  );
}
