import React from 'react'
import './Cities.scss'

export default function Cities({children}) {
  return (
    <div className='Cities'>
        <div className='Cities-body'>
            {children}
        </div>
    </div>
  )
}
