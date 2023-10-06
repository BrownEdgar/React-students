import { useSelector } from 'react-redux'

import "./App.css"
import ShopingCart from './components/ShopingCart/ShopingCart'

export default function App() {
  const count = useSelector((state) => state.products.count)
  return (
    <div className='App'>
      <h1>
        Shoping Cart <br />
        <span><strong>{count}</strong> items in you cart</span>
      </h1>
      <ShopingCart />
    </div>
  )
}
