import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header />
              <Routes>
                <Route path='/'     element={<ProductList/>}></Route>
                <Route path='/cart' element={<Cart/>}>       </Route>
              </Routes>
               
            </div>
        </Provider>
    );
};

export default App;
