import React from 'react'
import './shop.css'
import { PRODUCTS } from '../../products'
import Product from './product'

function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Heirs</h1>
        </div>
        <div className='products'>
{PRODUCTS.map((product, index)=>{
    return(<Product key={index} data={product} />)
})}
        </div>
    </div>
  )
  
}

export default Shop
