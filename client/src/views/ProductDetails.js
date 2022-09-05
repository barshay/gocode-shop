import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  let params = useParams();
  return (
    <div>ProductDetails for product {params.productID}</div>
  )
}

export default ProductDetails