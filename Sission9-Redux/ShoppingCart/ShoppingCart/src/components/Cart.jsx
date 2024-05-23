import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((total,item)=>total+item.price*item.quantity,0 )

  return (
    <div>
      <h2>Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <span> tổng giá :{totalPrice} </span>
    </div>
  );
};

export default Cart;
