
import { Link } from 'react-router-dom'
import { BsCartFill } from 'react-icons/bs'

import './Navbar.scss'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const bascet = useSelector(state => state.basket.data)

  return (
    <header>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li className='cart'>
          <Link to="/cart">
            <BsCartFill />
            {bascet.length > 0 && <span>{bascet.length}</span>}

          </Link>
        </li>
      </ul>
    </header>
  )
}
