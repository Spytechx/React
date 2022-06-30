import React from 'react'

function Signup() {
  return (
    <div>
        <form className='for-form'>
               <br></br> 
               <br></br> 
               <br></br> 
                <label> UserName: </label>
                <input type='text' placeholder='Choose a UserName'></input> <br></br>
            
                <label> FirstName </label>
                <input type='text' placeholder='Enter Your FirstName'></input>  <br></br>
            
                <label> LastName </label>
                <input type='text' placeholder='Enter Your LastName'></input>  <br></br>
            
                <label> LastName </label>
                <input type='text' placeholder='example@gmail.com'></input>  <br></br>
            
               
                <legend>Choose a Gender</legend>

                <input type='radio' id="" name='gender'></input>
                <label> Male </label>   <br></br>
            
                <input type='radio' id="" name='gender'></input>
                <label> Female </label>  <br></br>
            
                <input type='radio' id="" name='gender'></input>
                <label> Others </label>  <br></br>

                <label> PhoneNumber </label>
                <input type='Number' placeholder='Enter Your PhoneNumber'></input>  <br></br>
            
                <label> City </label>
                <input type='text' placeholder='Enter Your City'></input>  <br></br>
            
                <label> D.O.B </label>
                <input type='date'></input>  <br></br>
            
                <label> Password </label>
                <input type='password' placeholder='Enter Your Password'></input>  <br></br>
            
                <label> Confirm Password: </label>
                <input type='password' placeholder='Confirm Your Password'></input>  <br></br>

                <button>SignUp</button>
            
            
           
        </form>
    </div>
  )
}

export default Signup