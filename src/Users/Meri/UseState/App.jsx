import React, { useState } from 'react'

export default function App() {
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
  ])

  const deleteById = (id) => {
    const result = foods.slice().filter(e => e.id !== id)
    setFoods(result)
  }

  const addPrice = () => {
    const res = foods.reduce((acc, cv) => {
      acc += cv.amount * cv.price
      return acc;
    },0)
    console.log(res);
  }

  return (
    <div>
      {
        foods.map(food => {
          return (
            <div key={food.id}>
              <h3>Name: {food.name}</h3>
              <button onClick={() => deleteById(food.id)}>&#10006;</button>
              <p>Price: {food.price}</p>
              <p>Amount: {food.amount}</p>
            </div>
          )
        })
      }
      <button onClick={() => addPrice()}>Add price</button>
    </div>
  )
}
