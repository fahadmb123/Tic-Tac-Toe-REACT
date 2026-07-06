import { useState } from 'react'
import './App.css'

function Square (props) {

  return  <button className="square" onClick={props.onClick}>{props.value}</button>
}


function Winner (values) {
  const coordinates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i=0;i<coordinates.length;i++) {
    const [a,b,c] = coordinates[i]
    if (values[a] && values[b] === values[a] && values[b] === values[c]) {
      return values[c]
    }
  }
  return null
}


function filled(values) {
  for (let v of values) {
    if (!v){
      return false
    }
  }
  return true
}

function App() {

  const [status,setStatus] = useState(true)
  const [value,setValue] = useState(Array(9).fill(null))

  function Click(index) {
    if (Winner(value) || value[index-1]){
      return
    }
    let val
    if (status) {
      val = "X"
    } else {
      val = "O"
    }
    
    const New = value.slice()
    New[index-1] = val
    setValue(New)
    setStatus(!status)
  }

  function Clear () {
    setValue(Array(9).fill(null))
  }

  const win = Winner(value)
  let result
  if (win) {
    result = "Winner Is ---> "+win
  }else if (filled(value)) {
    result = "You Can Restart";
  } else {
    result = "This is Your Turn ---> " + (status ? "X" : "O");
  }


  let showClearButton = false
  if (win || filled(value)) {
    showClearButton = true
  }


  
  return (
    <>
      <div className='game'>
        <h1 className="title">Tic-Tac-Toe</h1>
        <h2 className="second-title">Wannna Playy...</h2>
        <h2 className="third-title">{result}</h2><br />


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
         {showClearButton && <button className="clear-btn" onClick={Clear}>Clear</button>}
      </div>
    </>
  )
}

export default App
