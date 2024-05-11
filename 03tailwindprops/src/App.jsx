import { useState } from 'react'
import Card from '../components/Card'
import './App.css'

let myObj = {
  name: 'sekar',
  age: 25,
  address: {
    city: 'Madurai',
    state: 'Tamil Nadu',
    country: 'India'
  }
}
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card userName="sekar" myArr={newArr} />
      <Card userName='Ram' post='Assigned' />
      <Card />
      <Card />
    </>
  )
}

export default App
