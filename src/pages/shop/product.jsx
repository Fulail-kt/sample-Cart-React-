import React from 'react'
import { Link } from 'react-router-dom'


function Product(props) {
  const {id,productName,price,productImage} = props.data
  return (
    <div key={id} className='product'>
      <Link to={`/product/${id}`}>
        <img src={productImage} alt={productName} />
      </Link>
      <div className='description'>
        <p><b>{productName}</b></p>
        <p> ₹ {price}</p>
      </div>
    </div>
  )
}

export default Product
