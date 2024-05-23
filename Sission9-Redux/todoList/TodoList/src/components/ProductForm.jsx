// ProductForm.js

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, updateProduct } from '../actions/action'

const ProductForm = () => {
  const selectedProduct = useSelector(state => state.todoReducer.selectedProduct)
  const dispatch = useDispatch()

  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: ''
  })

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct)
    } else {
      setProduct({
        id: '',
        name: '',
        price: ''
      })
    }
  }, [selectedProduct])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (product.id) {
      dispatch(updateProduct(product))
    } else {
      const newProduct = { ...product, id: Date.now() }
      dispatch(addProduct(newProduct))
    }
    setProduct({
      id: '',
      name: '',
      price: ''
    })
  }

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <h2>{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text"
            id="name"  name="name"  value={product.name}  onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text"  id="price"   name="price"  value={product.price}  onChange={handleChange} />
        </div>
        <button type="submit">{selectedProduct ? 'Update' : 'Add'}</button>
      </form>
    </div>
  )
}

export default ProductForm