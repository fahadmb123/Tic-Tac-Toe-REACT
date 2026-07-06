import { useState } from 'react'
import './App.css'

function Square (props) {

  return  <button className="square" onClick={props.onClick}>{props.value}</button>
}

function App() {
  const [value,setValue] = useState(Array(9).fill(null))
  function Click(index) {
    const New = value.slice()
    New[index-1] = index
    setValue(New)
  }

  return (
    <>
      <div className='game'>
        <h1 className="title">Tic-Tac-Toe</h1>
        <h2 className="second-title">Wannna Playy...</h2><br />


        <div className="board">


          <Square value={value[0]} onClick={()=>{Click(1)}}/>
          <Square value={value[1]} onClick={()=>{Click(2)}}/>
          <Square value={value[2]} onClick={()=>{Click(3)}}/>

          <Square value={value[3]} onClick={()=>{Click(4)}}/>
          <Square value={value[4]} onClick={()=>{Click(5)}}/>
          <Square value={value[5]} onClick={()=>{Click(6)}}/>

          <Square value={value[6]} onClick={()=>{Click(7)}}/>
          <Square value={value[7]} onClick={()=>{Click(8)}}/>
          <Square value={value[8]} onClick={()=>{Click(9)}}/>



        </div>
      </div>
    </>
  )
}

export default App
