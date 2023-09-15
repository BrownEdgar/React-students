import './Modal.css'

// eslint-disable-next-line react/prop-types
export default function Modal({openModal, children}) {
    return (
        <div className='Modal'>
            <div className='Modal-body'>
                {children}
                <button  onClick={openModal}>X</button>
            </div>
        </div>
    )
}
