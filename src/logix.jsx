import React, { useState } from "react";


const Login = () =>{

    const[isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogIn = () =>{
        setIsLoggedIn(true)
    }
    const handleLogOut = () =>{
        setIsLoggedIn(false)
    }
 


    return(
        <div>
            {isLoggedIn ? (
                <h1>Welcome</h1>
            ):(
                <h1>Please Log In</h1>
            )}

        <button onClick={isLoggedIn ? handleLogOut : handleLogIn}>{isLoggedIn ? "LogOut": "Login"}</button>
        </div>
    )
    
}


export default Login