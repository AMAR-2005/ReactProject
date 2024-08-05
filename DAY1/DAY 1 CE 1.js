import React from 'react'
function App() {
  const display=()=>{
    alert("Message from JavaScript Alert!")
    console.log("Message to developer")
  }
  return (
    <div>
      <h1>Let we see the output of Javascript</h1>
      <button onClick={display}>Check</button>
    </div>
  )
}
export default App