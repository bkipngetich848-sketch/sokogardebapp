import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

  // Below are our hook that enable us to store the state of our application
  const[ username, setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[phone,setPhone]=useState("")

  // three addictional hooks
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("")

  // below is our function
  const handlesubmit=async(e)=>{
    // prevent defaults- it mean you are preventing the browser from reloading when a user submit details
  e.preventDefault()

  // step 6.update loading page

  setLoading("Registration in progress...")

  // step 7:try catch block
  try{

    //step 8:  create a form data object
    const formData=new FormData()

     // step9: append
    formData.append("username",username)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("phone",phone)

    // step10 axios
    const response=await axios.post("https://tikwet.alwaysdata.net/api/signup",formData)

    // step11:
    setLoading("")
    setSuccess("User register successfully.")

    // step12:
    setUsername("")
    setEmail("")
    setPassword("")
    setPhone("")
  }
  catch(error){
    // step13:
    setLoading("")
    setError("Sorry, something happend please try again...")
   

  }
  }
  

  return (
    <div className='row justify-content-center mt-4'>
      

      <div className='col-md-6 p-4 card shadow '>
      <h1>Signup</h1>
           
      <form onSubmit={handlesubmit}>
         
       <h4 className='text-info'>{loading}</h4>
       <h4 className='text-success'>{success}</h4>
       <h4 className='text-danger'>{error}</h4>

      <input type="text" 
        placeholder='username'
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        className='form-control'/> 
        <br />  

         {/* {username} */}

       <input type="Enter your number" 
        placeholder='phone' 
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className='form-control'/> 
        <br />

         {/* {phone} */}


       <input type="Enter your email"
        placeholder='email' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='form-control'/> 
        <br />

         {/* {email} */}

       <input type="Enter your password" 
        placeholder='password' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='form-control'/>
         <br />

         {/* {password} */}

      
      <input type="Submit" value="Signup" 
        className='btn btn-outline-primary' />


      </form>
      </div>
    </div>
  )
}

export default Signup
