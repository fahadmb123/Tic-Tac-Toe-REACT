import { useState } from 'react'
import './App.css'

function Square (props) {

  return  <button className="square" onClick={props.onClick}>{props.value}</button>
}

function App() {
  const [value,setValue] = useState(Array(9).fill(null))
  function Click() {
    const New = value.slice()
    New[0] = "X"
    setValue(New)
  }

  return (
    <>
      <div className='game'>
        <h1 className="title">Tic-Tac-Toe</h1>
        <h2 className="second-title">Wannna Playy...</h2><br />


        <div className="board">


          <Square value={value[0]} onClick={Click}/>
          <Square value={value[1]} onClick={Click}/>
          <Square value={value[2]}/>

          <Square value={value[3]}/>
          <Square value={value[4]}/>
          <Square value={value[5]}/>

          <Square value={value[6]}/>
          <Square value={value[7]}/>
          <Square value={value[8]}/>



        </div>
      </div>
    </>
  )
}

export default App
