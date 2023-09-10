import React from 'react';
import PropTypes from 'prop-types';

export default function Child({ data }) {
  return (
    <div>
      {data.map(user => (
        <div key={user.id}>
          <h2>First name: {user.first_name}</h2>
          <h2>Last name: {user.last_name}</h2>
          <h3>Address:</h3>
          <p>Street: {user.address.street}</p>
          <p>House: {user.address.house}</p>
          <p>City: {user.address.city}</p>
          <p>Age: {user.age}</p>
          <p>Salary: {user.salary}</p>
          <p>Best Friend: {user.bestFriend}</p>
        </div>
      ))}
    </div>
  );
}

Child.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string,
        house: PropTypes.number,
        city: PropTypes.string,
      }),
      age: PropTypes.number,
      salary: PropTypes.number,
      bestFriend: PropTypes.string,
    })
  ).isRequired,
};