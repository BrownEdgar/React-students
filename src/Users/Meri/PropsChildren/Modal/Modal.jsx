import React from 'react';
import './Modal.css';

export default function Modal({ toggleModal, children }) {
  return (
    <div className='Modal'>
      <div className='Modal-body'>
        {children}
      </div>
    </div>
  );
}
