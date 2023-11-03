import { useSelector } from "react-redux";

import './Sweets.scss';

export default function Sweets() {
  const products = useSelector((state) => state.sweets.data);

  return (
    <div className="ProductList">
    <h1>Pleasure and Taste In Our Place</h1>
    <div className="product-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="product-info">
            <h3>{product.title}</h3>
           <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
