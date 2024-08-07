import React,{useState} from 'react';
const App=()=>{
  const[name,Setname]=useState("");
  const[email,Setemail]=useState("");
  const[message,Setmessage]=useState("");
  const Display=()=>{
    console.log({name,email,message});
  }
  return(
    <div>
      <form>
          <p>Name</p>
          <input type="text" placeholder="Enter your name" value={name} onChange={(a)=>Setname(a.target.value)}/>
          <p>Email</p>
          <input type="email" placeholder="Enter your Email" value={email} onChange={(a)=>Setemail(a.target.value)}/>
          <p>Message</p>
          <input type="text" placeholder="Enter your Message" value={message} onChange={(a)=>Setmessage(a.target.value)}/>
      </form>
      <button onClick={Display}>CLICK</button>
    </div>
  )
 }
export default App;