import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/auth"
import { useNavigate } from 'react-router-dom'
import {logout} from "../../store/authSlice"
function LogoutBtn() {
  

  const navigate=useNavigate()
    const dispatch=useDispatch()
    const logoutHandler=async()=>{
        await authService.logout()
        .then(()=>{dispatch(logout())})
        
        navigate(`/login`)

    }
    
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn