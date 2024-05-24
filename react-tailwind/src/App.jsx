import React from 'react'
import products from './products';
import text from './text';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-700 p-4'>
      <div className='w-44 h-32 rounded-xl bg-red-600 p-3 text-white' > 
      <h1>userid </h1>
      </div>
      
    <products/> 

    </div>
    
  );
}

export default App

