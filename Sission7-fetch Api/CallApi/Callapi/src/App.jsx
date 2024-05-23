import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./controller/Home";
import Category from "./controller/Category";
import Product from "./controller/Product";
import Index from "./controller/Index";
import Details from "./controller/Details";
import ProductInApi from "./controller/ProductInApi";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/details/:id" element={<Details />} />
        <Route path="/productApi" element={<ProductInApi />} />
      </Routes>
    </>
  );
}

export default App;
