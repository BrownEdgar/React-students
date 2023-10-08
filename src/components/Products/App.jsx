import { useSelector } from 'react-redux'
import Products from './Products'

export default function App() {
  const products = useSelector((state) => state.products)
  return (
    <div>
      {/* <h1>hello redux</h1>  
      <pre>
        {
        JSON.stringify(products, null, 2)
        }
      </pre> */}
      <h1>Shopping cart</h1>
      <Products />
    </div>
  )
}
