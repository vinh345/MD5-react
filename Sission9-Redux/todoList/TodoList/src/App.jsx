// App.js

import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import productReducer from './reducers/todoReducer'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import store from './store/store'



const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ProductList />
        <ProductForm />
      </div>
    </Provider>
  )
}

export default App