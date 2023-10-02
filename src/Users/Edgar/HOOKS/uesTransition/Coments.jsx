export default function Coments({ data }) {

  return (
    <ul id='list'>
      {data.map(coment => {
        return (
          <li key={coment.id} className="list-item">
            <span className='title'>{coment.title}</span>
            {/* <span>{coment.body}</span>
            <span className='special_number'>{coment.id}</span> */}
          </li>
        )
      })}
    </ul>
  )
}
