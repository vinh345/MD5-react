import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounText from './components/CounText'
import OrderForm from './components/OrderForm'
import ProductList from './components/ProductList'
import TaskList from './components/TaskList'
import SearchAndFilter from './components/SearchAndFilter'
import Form from './components/Form'
import ShippingCalculator from './components/ShippingCalculator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <CounText/> */}
    {/* <OrderForm /> */}
    {/* <ProductList /> */}
    {/* <TaskList/> */}
    {/* <SearchAndFilter/> */}
    {/* <Form/> */}
    <ShippingCalculator/>
    </>
  )
}

export default App
