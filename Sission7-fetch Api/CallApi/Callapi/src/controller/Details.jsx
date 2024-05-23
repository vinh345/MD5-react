import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/product";

export default function Details() {
  const { id } = useParams();
  const handleBack = useNavigate();
 
  let product = products.find((item) => item.id == id);


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <button onClick={()=>handleBack(-1)}> back</button>
    <button onClick={()=>handleBack(-2)}> back to home</button>
    <div>
      <img src={product.image} alt="" />
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
    </div>
    </>
  );
}
