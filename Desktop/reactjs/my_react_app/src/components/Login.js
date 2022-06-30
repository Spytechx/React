import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <fieldset>
                <legend>Login</legend>
        <label>Username:</label>
        <input type= 'text' placeholder='Enter Your UserName'></input>

        <label>Email:</label>
        <input type='text' placeholder='Enter Your Email'></input>

        <label> Password: </label>
        <input type='text' placeholder='Enter Your Password'></input>
       
        
       
        </fieldset> 
        </form>
    </div>
  )
}

export default Login
