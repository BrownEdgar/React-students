import { useState } from "react"
import Modal from "./Modal/Modal"

export default function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)

    }
    return (
        <div>
            {isOpen ? (
                <Modal openModal={toggleModal}>
                    <h2>Are you sure?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </Modal>
            ) : null}
            <button onClick={toggleModal}>Open Modal</button>
        </div>
    )
}