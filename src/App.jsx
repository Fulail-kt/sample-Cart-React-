import React,{useState} from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Shop from './pages/shop/shop'
import Cart from'./pages/cart/cart'
import ProductDetails from './pages/productDetails/productDetails'



function App() {
  const [cart, setCart] = useState([]);

  
  return (

      
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/cart' element={<Cart cart={cart} />} />
    <Route path='/product/:id' element={<ProductDetails cart={cart} setCart={setCart} />} />
   
  </Routes>
</Router>

  )
}

export default App
