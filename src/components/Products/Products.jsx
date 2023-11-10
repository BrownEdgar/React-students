import { useSelector, useDispatch } from 'react-redux'
import { addToCard } from '../../features/bascetSlice'


import './Products.scss'
export default function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch()
  const handleClick = (productId) => {
    dispatch(addToCard({ id: productId }))
  }
  return (
    <div className='Products'>
      {products.map(elem => {
        return <div className="items" key={elem.id}>
          <img src={elem.product_image} alt="" />
          <h2>{elem.product_brand} - {elem.product_name}</h2>
          <p className='price'>Price: {elem.product_price}$</p>
          <button onClick={() => handleClick(elem.id)}>add to card</button>

        </div>
      })}
    </div>
  )
}
