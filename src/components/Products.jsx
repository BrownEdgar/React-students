import React from 'react';
import { useSelector } from 'react-redux';
import './Products.scss';

export default function Products() {
  const products = useSelector((state) => state.products.data);

  return (
    <div className="ProductList">
      <h1>Shop Bestsellers</h1>
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

