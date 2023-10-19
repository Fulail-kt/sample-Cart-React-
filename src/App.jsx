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
    <div className='App'>
      
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Shop/>}></Route>
    <Route path='/cart' element={<Cart cart={cart} />} />
    <Route path='/product/:id' element={<ProductDetails addToCart={setCart} />} />
  </Routes>
</Router>
      
    </div>
  )
}

export default App
