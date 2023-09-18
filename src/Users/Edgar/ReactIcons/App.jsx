import React from 'react'
import { FcAndroidOs } from 'react-icons/fc'
import { AiFillYoutube } from 'react-icons/ai'
import { BiLogoReact } from 'react-icons/bi'

import './App.scss'

export default function App() {
  return (
    <div className='container'>
      <h1>React Icons</h1>
      <ul className='container-list'>
        <li>
          <FcAndroidOs />
        </li>
        <li>
          <AiFillYoutube />
        </li>
        <li>
          <BiLogoReact className='container-icon container-icon_react' />
        </li>
      </ul>
    </div>
  )
}
