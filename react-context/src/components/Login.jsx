import React,{useState,useContext} from 'react'
import UserContext from '../context/UserCOntext'

function Login() {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)} name="username" id="" placeholder='username' />
      {" "}{" "}
      <input type="text" value={password} onChange={(e) =>setPassword(e.target.value)} name="password" id="" placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login