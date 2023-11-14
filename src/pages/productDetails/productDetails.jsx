import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products'

function ProductDetails({ cart, setCart }) {
  const addToCart = (productId) => {
    const selectedProduct = PRODUCTS.find((product) => product.id === productId);
  
    if (selectedProduct) {
      const existingCartItem = cart.find((item) => item.id === productId);
  
      if (existingCartItem) {
        const updatedCart = cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
      } else {
       
        const newItem = {
          id: selectedProduct.id,
          name: selectedProduct.productName,
          image: selectedProduct.productImage,
          price: selectedProduct.price,
          quantity: 1,
        };
  
        setCart([...cart, newItem]);
      }
    }
  };
  

  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }


  const productStyle={
      'width':'100%',
      'display':'flex',
      'justifyContent':'space-between',
      'padding':'50px',
      'boxSizing': 'border-box'
    }

    const productImageStyle={
      'width':'50%',
      'display':'flex',
      'justifyContent':'space-around',
    }
    const productDetailsStyle={
      'width':'50%',
    }
  

  const { productName, price, productImage } = product;

 

  return (
    <div  style={productStyle}>
      <div className="productImages" style={productImageStyle}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <img src={productImage} alt=""style={{ width: '50px',padding:'3px' }} sizes={10} />
        <img src={productImage} alt=""style={{ width: '50px',padding:'3px' }} sizes={10} />
        <img src={productImage} alt=""style={{ width: '50px',padding:'3px' }} sizes={10} />
        <img src={productImage} alt=""style={{ width: '50px',padding:'3px' }} sizes={10} />
      </div>
        <img src={productImage} sizes={32} style={{ width: '40%' }} alt="" />
      </div>
      <div className='productDetails' style={productDetailsStyle}>
      <div className='prd'>
        <h2>{productName}</h2>
          <p>₹ {price}</p>
      </div>
      <button className="addToCart" onClick={() => addToCart(product.id)}>
  Add To Cart
</button>
      </div>
    </div>
  )
}

export default ProductDetails
