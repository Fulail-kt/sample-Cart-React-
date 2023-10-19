import React from 'react'
import './cart.css'

function Cart({ cart }) {

  console.log(cart)
  return (
    <div>
      <h2>Your Cart</h2>
      
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.productName} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart

