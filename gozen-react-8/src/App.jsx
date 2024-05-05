import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form/Form'

function App() {

  const getData = (data) => {
    console.log(data)

  }
 

  return (
    <>
    <Form onSubmit = {getData} />
      
    </>
  )
}

export default App
