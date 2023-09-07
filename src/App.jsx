import { useState } from 'react'
import './App.css'
import PresentationCard from './components/presentationCard'
import InputFocus from './components/InputFocus'
import Counter from './components/Counter'

function App() {
  // Aca la const data pasa la informacion q luego se va a
  // renderizar dentro de la presentation card
  const data = {
    name: "Fio",
    age: 19,
    details: {
      profession: "web developer and freelancer"
    },
    hobbies: ["gym", "coffee", "read books"]
  }
  return <>
    <PresentationCard
      name={data.name}
      age={data.age}
      details={data.details}
      hobbies={data.hobbies}
      saludar={() => alert(`Hola ${data.name}`)}
    />
    <div className='separador' />
    <InputFocus />
    <div className='separador' />
    <Counter />
  </>
}

export default App
