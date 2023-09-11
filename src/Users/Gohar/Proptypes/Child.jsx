import PropTypes from 'prop-types'

export default function Child({  todo}) {
  return (
    <div>
      {todo?.title}
    </div>
  )
}

Child.defaultProps = {
  name: "Babken"
}

Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  gender: PropTypes.oneOf(["male", "female"]),
  todo: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })
}
