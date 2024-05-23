import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProductInApi() {

    const [product, setProduct] = useState([]);
    

    const getAPI = async ()=>{
        axios
        const response = await axios.get("http://localhost:8080/api.myservice.com/v1/products");
        const data = response.data.data;
        setProduct(data);
    }

    // 
    useEffect(()=>{
        getAPI()
    },[])

  return (
    <>
    <h2>sản phẩm từ Api </h2>
    {product.map((item,index)=>{
      return <div key={index}>
           <h3>name : {item.name}</h3>
      </div>
    })}
    
    </>
  )
}
