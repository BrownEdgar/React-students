import React, { useState } from 'react';
import Component from './Component';
import Modal from './Modal/Modal';
import './App.css'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [foods, setFoods] = useState([
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
  ]);

  const [foodToDel, setFoodToDel] = useState(null)

  const toggleModal = (id) => {
    setIsOpen(!isOpen);
    if(id){
      setFoodToDel(id)
    }
  };

  const deleteById = (id) => {
    const result = foods.filter((e) => e.id !== id);
    setFoods(result);
    toggleModal(); 
  };

  return (
    <div className='App'>
      {foods.map((food) => {
        return (
          <div className='App-items' key={food.id} >
            <button className='App-btn' onClick={() => toggleModal(food.id)}>&#10006;</button>
            <h3>Name: {food.name}</h3>
            <p>Price: {food.price}</p>
            <p>Amount: {food.amount}</p>
          </div>
        );
      })}
      {isOpen ? (
        <Modal toggleModal={toggleModal}>
          <h2>Are you sure?</h2>
          <button className='App-Modal-btn' onClick={() => deleteById(foodToDel)}>Yes</button>
          <button className='App-Modal-btn' onClick={toggleModal}>No</button>
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
}
