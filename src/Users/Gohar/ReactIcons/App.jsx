
import {FaFacebookF}  from 'react-icons/fa'
import {BsTwitter,BsGoogle,BsInstagram,BsYoutube}  from 'react-icons/bs'
import './App.scss'

export default function App() {
  return (
    <div className='contanier'>
        <ul>
            <li>
                <FaFacebookF/>
            </li>
            <li>
                <BsTwitter/>
            </li>
            <li>
                <BsGoogle/>
            </li>
            <li>
                <BsInstagram/>
            </li>
            <li>
                <BsYoutube/>
            </li>
        </ul>

    </div>
  )
}
