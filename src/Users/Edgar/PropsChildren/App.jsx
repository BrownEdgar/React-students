import { useState } from 'react'
import Modal from './Modal/Modal'


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      {isOpen ? (
        <Modal toggleModal={toggleModal}>
          <h2>Are you sure?</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde qui reprehenderit alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias dicta laborum vitae incidunt laudantium mollitia suscipit! Sed optio beatae voluptate repellendus illum. Alias cupiditate quidem ducimus eveniet, commodi eos!</p>
          <button>delete</button>
        </Modal>
      ) : null}
      <button onClick={toggleModal}>open Modal</button>
    </div>
  )
}

export default App