import PropTypes from 'prop-types';

export default function Child({ data}) {
  return (
    
    <div>
      {/* <button onClick={() => addPrice()}>Add Price</button> */}
      {data.map(food => (
        <div key={food.id}>
          <h3>Food name: {food.name}</h3>
          <button onClick={() => delById(food.id)}>Delete</button>
          <p>Price: {food.price}</p>
          <p>Amount: {food.amount}</p>
        
        </div>
      ))}
    </div>
  );
}

Child.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
    name: PropTypes.string.isRequired,
    })
  ).isRequired,
};