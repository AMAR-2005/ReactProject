import React from 'react';
 const App=()=>{
    const inline1={
        color:'green'
    }
    const inline2={
        color:'darkblue',
        fontSize:'16px'
    }
    const inline3={
        backgroundColor:'lightblue',
        color:'darkblue',
        padding:'10px',
        border:'1px solid blue',
        borderRadius:'5px'
    }
  return(
    <div>
      <h1 style={inline1}>Inline Style in JSX Example.</h1>

      <div style={inline2}>
        
        <p style={inline3}>This is a paragraph with inline styles applied.</p>
      </div>
    </div>
  )
 }
export default App;