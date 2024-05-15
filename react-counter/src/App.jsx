import { useState } from 'react';
import './App.css'

function App() {

  let [counter, harsh] = useState(15);
  // let counter;

  const addValue = ()=>{
    
    
    if(counter < 20){
      counter = counter+1;
    harsh(counter)
      
  }

  }

  const removeValue=()=>{
    
    if(counter > 0){
      counter = counter-1;
      harsh(counter)
      
      
  }
  }

  return (
    <>
      <h1>Harsh lakhanpal</h1>
      <h2>counter Value : {counter}</h2>

      <button onClick={addValue}>increase</button><br />
      <button onClick={removeValue}>decrease</button>

      
    </>
  )
}

export default App
