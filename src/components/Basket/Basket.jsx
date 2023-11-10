import { useDispatch, useSelector } from 'react-redux'

import './Basket.scss'
import { deleteWithid } from '../../features/bascetSlice'

export default function Basket() {
  const state = useSelector(state => {
    return state.products.filter(product => state.basket.data.includes(product.id))
  })
  const dispath = useDispatch()

  const handleDelete = (id) => {
    dispath(deleteWithid({ id }))
  }

  return (
    <div className='Basket'>
      {state.map(product => {
        return (
          <div key={product.id} className='items'>
            <img src={product.product_image} alt="" />
            <button onClick={() => handleDelete(product.id)}>remove from cart</button>
          </div>
        )
      })}

    </div>
  )
}
