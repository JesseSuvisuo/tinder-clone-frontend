import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import TinderCards from './TinderCards'
import AddForm from './AddForm'
import axios from './axios'

function App() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/tinder/cards')

      setPeople(res.data)
      console.log(res.data)
    }

    fetchData()
  }, [])

  const addUser = (person) => {
    axios
      .post('/tinder/cards', {
        name: `${person.personName}`,
        imgUrl: `${person.imgUrl}`,
      })
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  return (
    // BEM class naming convention
    <div className="app">
      <Header />
      <TinderCards people={people} />
      <AddForm onAdd={addUser} />
    </div>
  )
}

export default App
