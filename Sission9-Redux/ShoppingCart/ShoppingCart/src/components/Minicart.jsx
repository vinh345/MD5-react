import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../action/action";

function Minicart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = () => {
    const confirmRemove = window.confirm("bạn có muốn xóa không ?");
    confirmRemove && dispatch(removeFromCart(item.id));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <div>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item,index) => (
            <div key={index}>
              <img src={item.image} style={{ width: "150px" }} />
              <h2>{item.name}</h2>
              <p>{item.price} VND</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={()=>handleIncrease(item)}>+</button>
              <button onClick={()=>handleDecrease(item)}>-</button>
            </div>
          ))
        )}
      </div>
      <span> tổng giá :{totalPrice} </span>
    </div>
  );
}

export default Minicart;
