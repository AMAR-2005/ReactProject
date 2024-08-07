import React from 'react';
const App=()=>{
  const in3={
    border:'2px,grey,solid',
    backgroundColor:'lightgrey',
    height:'100px',
    width:'300px',
    textAlign:'center',
  }
  const in2={
    border:'2px,grey,solid',
    backgroundColor:'lightgrey',
    height:'300px',
    width:'300px',
  }
  const in1={
    position:'absolute',
    top:'25%',
    left:'35%',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  }

  return(
    <div style={in1}>
      <h1>Car and Location Info</h1>
      <div style={in2}>
        <h2>Tesla Model S</h2>
        <img src="https://imgd-ct.aeplcdn.com/1056x660/n/xsoupsa_1476828.jpg?q=80" style={{height:'200px',width:'200px',textAlign:'center'}}></img>
      </div>
      <footer style={in3}>
        <h3>Tesla</h3>
        <h4>Palo Alto</h4>
      </footer>
    </div>
  )
 }
export default App;