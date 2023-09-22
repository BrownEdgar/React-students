import { LiaFacebookF } from 'react-icons/lia'
import { BsTwitter, BsGoogle, BsInstagram, BsYoutube } from 'react-icons/bs'
import './App.scss'

export default function App() {
  return (
    <div className='container'>
      <h1>Icons</h1>
      <ul className='container-list'>
        <li>
          <LiaFacebookF />
        </li>
        <li>
          <BsTwitter />
        </li>
        <li>
          <BsGoogle />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <BsYoutube />
        </li>
      </ul>
    </div>
  )
}
