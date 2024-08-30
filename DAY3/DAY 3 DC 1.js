import React, { useState } from 'react';

function App() {
    const [Tasks,setTasks]=useState([
        {id:1,name:'Task 1'},
        {id:2,name:'Task 2'},
        {id:3,name:'Task 3'}
    ]);
    const handleDelete=(id)=>{
        setTasks(Tasks.filter(task => task.id!==id));
    }
    return (
        <div style={{backgroundColor:'lightblue', height:'100vh',width:'100%',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            <h1 style={{position:'fixed',marginBottom:'200px'}}>Tasks List</h1>
            <ul style={{listStyleType:'none'}}>
                {Tasks.map(task => (
                  <li key={task.id} style={{padding:'5px'}}>
                      {task.name}
                      &nbsp;
                      <button onClick={()=>handleDelete(task.id)} style={{backgroundColor:'red',color:'white'}}>Delete</button>
                  </li>
                ))}
            </ul>
        </div>
    );
}
export default App;