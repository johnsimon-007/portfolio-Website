import React, { useEffect } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import auth from '../../config/firebase'
import { signOut } from 'firebase/auth'
function Navbar() {
    const navigate = useNavigate()
    const [log,setLog] = useState(false)

    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user)
        {
          setLog(true)
          console.log("user logged in")
        }
        else{
          setLog(false)
          console.log("user logged out")
        }
      })
    },[])

    function logOut(){
      signOut(auth).then(()=>{
        navigate("/Login")
      }).catch((err)=>{
        console.log("error redirecting the user.",err)
      })
    }
  return (
    <div className='navbar px-5'>
      <div className='py-5 flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>John Simon</h2>
        <div className='flex items-center'>
            <Link className='list-none px-5' to={"/home"}>Home</Link>
            <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
            <Link className='list-none px-5' to={"/About"}>About</Link>

            {
              log? <button className='button-style hidden md:block' onClick={logOut}>Log Out</button>:
              <button className='button-style hidden md:block' onClick={()=>navigate("/login")}>Login</button>
            }
            
            
        </div>
    </div>
    </div>
  )
}

export default Navbar