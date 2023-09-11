
import './Modal.css'

export default function Modal({ toggleModal, children }) {
  console.log(`children: `, children)
  return (
    <div className='Modal'>
      <div className="Modal-body">
        {children}
        <button className='Modal-button' onClick={toggleModal}>X</button>
      </div>
    </div>
  )
}
