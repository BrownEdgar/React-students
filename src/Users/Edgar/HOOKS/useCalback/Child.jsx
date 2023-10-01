

export default function Child({ myFunction }) {
  console.log("Child render")
  return (
    <div>

      <h1>SUM {myFunction()}</h1>

    </div>
  )
}
