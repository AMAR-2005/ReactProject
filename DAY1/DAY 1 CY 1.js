import React,{useState} from 'react';
import './App.css';
const display=()=>{
  const name1="AMAR";
  const name2="AMAR";
  const obj1={name:"AMAR"}
  const obj2={name:"AMAR"}
  if(name1===name2)
  {
    alert(true);
  }else{
    alert(false);
  }
  if(obj1.name === obj2.name)
  {
    alert(true);
  }else{
    alert(false);
  }
}
 const App=()=>{
  return(
    <div>
      <button onClick={display}>Click</button>
    </div>
  )
 }
export default App;