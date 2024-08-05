import React,{useState} from 'react';
import './App.css';
 const App=()=>{
  let name="AMAR"
  let age=16
  let setStatus=false
  let userDefault=undefined
  let resopnseValue=null
  const display=()=>{
    console.log(name)
    console.log(age)
    console.log(setStatus)
    console.log(userDefault)
    console.log(resopnseValue)
    dis()
  }
  const dis=()=>{
    alert("Check the Console Output!")
    let newname=name;
    name="AMARNATH";
    console.log(name)
    let newage=name;
    age=18;
    console.log(age)
  }
  return (
    <div>
      <button onClick={display}>Check</button>
    </div>
  )
 }
export default App;