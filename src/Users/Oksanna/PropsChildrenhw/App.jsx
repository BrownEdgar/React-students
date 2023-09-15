import  { useState } from 'react';
import Modal from './Modal/Modal';

import './App.css'

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [food, setFood] = useState([
        {
            id: 1,
            name: '🍔',
            price: 30,
            amount: 10,
        },
        {
            id: 2,
            name: '🍨',
            price: 20,
            amount: 3,
        },
        {
            id: 3,
            name: '🍿',
            price: 10,
            amount: 5,
        },
        {
            id: 4,
            name: '🍵',
            price: 5,
            amount: 9,
        },
    ])


    const [poxanacacId, setPoxancacId] = useState(null) 

    const toggleModal = (id) => {
        setIsOpen(!isOpen)
        if(id){
            setPoxancacId(id)
        }
    }

    const sureDelete = (id) => {
        const res = food.filter(elem => {
            elem.id !== id
        })
        setFood(res)
        toggleModal()

    }

    return <div>
        {food.map(elem => {
            return (
                <div key={elem.id}>
                    <button onClick={() => toggleModal(elem.id)}>X</button>
                    <h2>{elem.name}</h2>
                    <h5>{elem.price}</h5>
                    <h5>{elem.amount}</h5>
                </div>
                
            )
        })}
        {isOpen ? (
        <Modal toggleModal={toggleModal}>
            <h1>ARE U SURE</h1>
            <button onClick={() => sureDelete(poxanacacId)}>YES</button>
            <button onClick={() => toggleModal()}>NO</button>
        </Modal> 
        ) : ('')}
    </div>
}

