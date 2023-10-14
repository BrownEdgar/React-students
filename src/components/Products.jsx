import { useSelector } from 'react-redux'
import { gerAllProducts } from '../features/productsSlice'

import './Products.scss'

export default function Products() {
  const products = useSelector(gerAllProducts);

  return (
    <section className='Products'>
      <div className="Products-header">
        <span>what we offer</span>
        <h1>Our Products</h1>
      </div>
      <div className="Products-flex">
        {
          products.map(product => {
            return (
              <div className="Products-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="Products-info">
                  <h4>{product.title}</h4>
                  <p>{product.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
