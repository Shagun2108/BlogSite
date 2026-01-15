import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../Service/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {

    const dispatch = useDispatch();

    const logoutHandler =()=>{
        authService.Logout()
        .then(()=>{
            dispatch(logout());
        })
        .catch((error)=>{
            console.log("Logout failed:", error);
        })
    }
  return (
    <button onClick={logoutHandler} className="text-white px-6 py-2 rounded-full inline-block hover:bg-red-600 transition">
        Logout
    </button>
  )
}

export default LogoutBtn