import { useState, useCallback,useEffect,useRef } from 'react'
import './app.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberallowed] = useState(false)
  const [charAllowed,setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str+= "!@#$%^&*()_-+={}[]:;\|><.,/?~"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const coppyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='rounded-xl justify-center text-center text-3xl w-full max-w-screen-md mx-auto shadow-lg px-4 my-8 text-orange-300 bg-gray-500 py-2 '>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-2 px-4 '
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.3 py-2 shrink-0'
          onClick={coppyPasswordToClipboard}
          >
          Copy</button>
        </div>
        <div className='flex gap-x-2 justify-center text-center text-2xl'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberallowed(prev=>!prev);
            }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharallowed(prev=>!prev);
            }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
