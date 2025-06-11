import React from 'react'
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import { response } from 'express'

const App = () => {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((Error)=>{
      console.log(error);
      
    })
  })
  return (
    <>
      <h1>Chai aur full stack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index)=>{
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
