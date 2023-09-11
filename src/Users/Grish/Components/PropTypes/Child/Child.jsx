import PropTypes from "prop-types";

import "./Child.css";

export default function Child({ data }) {
    
  return (
    <div className="Child">
      {data.map((user) => {
        return (
          <div className="Child__item" key={user.id}>
            <h3 className="item Child__item__firtsName">First Name: {user.firt_name}</h3>
            <h3 className="item Child__item__lastName">Last Name:{user.last_name}</h3>
            <ul className="item Child__item__address">Address: 
                <li className="items Child__item__street">Street: {user.addres.street}</li>
                <li className="items Child__item__house">House: {user.addres.house}</li>
                <li className="items Child__item__city">City: {user.addres.city}</li>
            </ul>
            <p className="item Child__item__age">Age: {user.age}</p>
            <p className="item Child__item__salary">Salary: ${user.salary}</p>
            <p className="item Child__item__bestFriend">BestFriend: {user.bestFriend}</p>
          </div>
        );
      })}
    </div>
  );
}

Child.propTypes = {
  id: PropTypes.number.isRequired,
  firt_name: PropTypes.string.isRequired,
  age: PropTypes.number,
  addres: PropTypes.shape({
    house: PropTypes.number,
    city: PropTypes.string.isRequired,
  }),
};
