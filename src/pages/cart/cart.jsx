import React, { useState } from 'react';
import './cart.css';

function Cart({ cart }) {
  const [cartItems, setCartItems] = useState(cart);

  const incrementQuantity = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <>
   
      <div className='w-100 h-100vh d-flex justify-content-center align-items-center' style={{minHeight:'60vh'}}>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className='w-75 text-center'>
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={product.image} width={90} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <button className='btn btn-dark p-1' onClick={() => decrementQuantity(product.id)}>
                        -
                      </button>
                      <span className='p-1'>{product.quantity}</span>
                      <button className='btn btn-dark p-1' onClick={() => incrementQuantity(product.id)}>
                        +
                      </button>
                    </td>
                    <td>₹ {product.price * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
        <hr />
        <div className='container w-100 d-flex justify-content-end align-items-center' >
          <p className='text-danger fs-2'>Total: ₹ {getTotalPrice()}</p>
        </div>
    </>
  );
}

export default Cart;
