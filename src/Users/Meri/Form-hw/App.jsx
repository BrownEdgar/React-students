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
            city: 'Tokyo',
            image: 'https://images.pexels.com/photos/358485/pexels-photo-358485.jpeg',
            title: 'Tokyo began life as a village known as Edo.' 
        },
        {
            id: 2,
            city: 'Kyoto',
            image:  'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Kyoto is the former capital city of Japan and world-famous for its refined culture, dining, and charm of rural Japan.' 
        },
        {
            id: 3,
            city: 'Hong Kong',
            image: 'https://images.pexels.com/photos/872698/pexels-photo-872698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Hong Kong is neither Chinese city nor completely independent country.' 
        },
        {
            id: 4,
            city: 'Seoul',
            image: 'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'As the largest city in South Korea, dynamic Seoul is a bewitching mix of ancient and modern.' 
        },
        {
            id: 5,
            city: 'London',
            image: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg',
            title: 'The City of London refers to a tiny, historic and central business district at the heart of London.' 
        }
    ])

    const handleChange = (e) => {
        const newMessage = e.target.value
        const res = cities.filter(e => e.city === newMessage)
        setCity(res)
        setMessage(newMessage)
        setIsOpen(!isOpen)
    }

    const toggleCities = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

  return (
    <div className='App'>
        <h1>{message}</h1>
        <form className='App-form'>
            <select name="cities" id="cities" className='App-select' onChange={handleChange}>
                <option value="Tokyo">Tokyo</option>
                <option value="Kyoto">Kyoto</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Seoul">Seoul</option>
                <option value="London">London</option>
            </select>
            {isOpen 
            ? (
                <Cities>
                    <div>
                        <button onClick={toggleCities}>&#10006;</button>
                        {
                            city.map(e => {
                                return(
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
