import './App.css'

function Square (props) {

  
  return  <button className="square">{props.value}</button>
}
function App() {

  return (
    <>
      <div className='game'>
        <h1 className="title">Tic-Tac-Toe</h1>
        <h2 className="second-title">Wannna Playy...</h2><br />


        <div className="board">


          <Square value="1"/>
          <Square value="2"/>
          <Square value="3"/>

          <Square value="4"/>
          <Square value="5"/>
          <Square value="6"/>

          <Square value="7"/>
          <Square value="8"/>
          <Square value="9"/>


        </div>
      </div>
    </>
  )
}

export default App
