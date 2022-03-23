import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClickA = (event) =>{
   console.log('Button id is:-button-a')

  }
  const handleClickB = (event) =>{
   console.log('Button id is:-button-b')

  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={handleClickA}>Button A</button>
      <button id="button-b" onClick={handleClickB}>Button B</button>
    </div>
  )
}


export default App;
