import React, { useState } from 'react'
import Cities from './Cities/Cities'
import './App.scss'

export default function App() {
    const [message, setMessage] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [city, setCity] = useState()

    const [cities, setCities] = useState([
        {
            id: 1,
            city: 'London',
            image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'London is the capital and largest city of England and the United Kingdom,'
        },
        {
            id: 2,
            city: 'Paris',
            image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Paris  is the capital and most populous city of France,'
        },
        {
            id: 3,
            city: 'New York',
            image: 'https://images.pexels.com/photos/16053726/pexels-photo-16053726/free-photo-of-picturesque-photo-of-new-york-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'New York  is the most populous city in the United States'
        },
        {
            id: 4,
            city: 'Madrid',
            image: 'https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Madrid is the capital and most populous city of Spain'
        },
    ])
    const handleChange = (e) => {
        const newMessage = e.target.value
        const res = cities.filter(e => e.city === newMessage)
        setCity(res)
        setMessage(newMessage)
        setIsOpen(!isOpen)
    }

    const toggleCities = (e) => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='App'>
            <h1>{message}</h1>
            <form className='App-form'>
                <select name="cities" id="cities" className='App-select' onChange={handleChange}>
                    <option value="" selected disabled></option>
                    <option value="London">London</option>
                    <option value="Paris">Paris</option>
                    <option value="New York">New York</option>
                    <option value="Madrid">Madrid</option>
                </select>
                {isOpen
                    ? (
                        <Cities>
                            <div>
                                <button onClick={toggleCities}>X</button>
                                {
                                    city.map(e => {
                                        return (
                                            <div key={e.id}>
                                                <h1>{e.city}</h1>
                                                <img src={e.image} alt={e.city} />
                                                <p>{e.title}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Cities>
                    )
                    : ('')
                }
            </form>
        </div>
    )
}


