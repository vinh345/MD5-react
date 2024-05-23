import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../action/action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    const confirmRemove = window.confirm("bạn có muốn xóa không ?");
    confirmRemove && dispatch(removeFromCart(item.id));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <div>
      <img src={item.image} alt={item.name} style={{ width: "200px" }} />
      <h2>{item.name}</h2>
      <p>{item.price} VND</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
