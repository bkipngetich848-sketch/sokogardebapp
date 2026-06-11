import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  // declare the hooks
  const[email, setEmail]=useState("")
  const[password,setPassword]=useState("")

  // step3 declare three hooks
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[Error,setError]=useState("")

  // step 13: create a used navigate hook tha will enable you redirect users to a npage page after 
  // successful login in
  const navigate= useNavigate()



  // create a function to handle a submit action
  const handlesubmit=async(e)=>{

    // prevent default
   e.preventDefault()

  //  update loading hook with a message
  setLoading("Please wait a while...")
   
  //step7 create a try catch block
  try{
  //  create a form data object
  const formData=new FormData()


  // step9; append detail from the data
  formData.append("email",email)
  formData.append("password",password)

  // step10: interact with axios module
  const response=await axios.post("https://tikwet.alwaysdata.net/api/signin",formData)

  // step11: set back the loading hook to empty
  setLoading("")

  // step12: by use of an if statement check whether they is a success ressage given back as a response from the hosted api, if they is rit means the user as enter corerect details and he/she redirected to another page if they no message given back, responce give a responce to the user meaning the detail he enter are incorrect.
  if(response.data.success ==="welcome"){
    // setSuccess("Login Success")
    // below we redirect our user to home page 
    navigate("/")

  }
  else{
    setError("Login unsuccessful")
  }
  }
   catch(error){
    // step13: set loading back to default and update the error hook just incese they is an error
    setLoading("")
    setError("Incorrect please try again....")
   }

  }
  return (
     <div className='row justify-content-center mt-4' >
      
      <div className='col-md-6 p-4 card shadow '>
        

      
     <form onSubmit={handlesubmit}>
      <h1> Sign In </h1> <br /> <br />

        <h4 className="text-info">{loading}</h4>
        <h4 className='text-success'>{success}</h4>
        <h4 className='text-danger'>{Error}</h4>

      {/* step 2 testinthe hooks */}

     <input type="email"
     value={email}
     onChange={(e)=> setEmail(e.target.value)}
     placeholder='enter your email'
     className='form-control'/> 

     {/* {email} */}

      <br /> <br />

     <input type="password"
     value={password}
     onChange={(e)=> setPassword(e.target.value)}
     placeholder='Enter your password'
     className='form-control'/>

     {/* {password} */}
     <br /><br />

     <input type="Submit" 
        value="Log In" 
        className='btn btn-outline-primary' />
     </form>




    </div>
    </div>
  )
}

export default Signin
