import React,{useContext} from 'react'
import UserContext from '../context/UserCOntext'
function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) return <div><h3>Please Login</h3>(User Not Found)</div>

    return <div><h3>Hii {user.username}</h3></div>
}

export default Profile