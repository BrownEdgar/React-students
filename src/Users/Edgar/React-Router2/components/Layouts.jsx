import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <div>
      <Navbar />


      <Outlet />

      <footer>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur alias deserunt?</p>
      </footer>
    </div>
  )
}
