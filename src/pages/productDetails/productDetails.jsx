import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products'

function ProductDetails() {

  const[cart,setCart]=useState([])

  const addToCart = (productId) => {
    console.log("Before setCart:", cart);
    const selectedProduct = PRODUCTS.find(product => product.id === productId);
    if (selectedProduct) {

      const item = {
        id: selectedProduct.id,
        name: selectedProduct.productName,
        image: selectedProduct.productImage,
        price:selectedProduct.price
      };


      setCart([...cart, item]);
    }
    console.log("After setCart:", cart);
  };




  
  



  const { id } = useParams();

  const product=PRODUCTS.find(product=>product.id == parseInt(id));

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

    {/* <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default ProductDetails
