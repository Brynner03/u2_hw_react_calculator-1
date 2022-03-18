import './App.css'
import Calculator from './components/Calculator'
import React from 'react'

const App = () => {
  
  return (
    <div className="App">
      <h1>The Calculator</h1>

      {<Calculator/>}
    </div>
  )
}

export default App