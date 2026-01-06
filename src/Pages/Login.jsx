import React from 'react'
import { useState } from 'react';
function Login() {
   
     const [email,setemail]=useState('')
      const [password,setpassword]=useState('')
    //   function which handles my deatils
    let submitdetails=async (e)=>{
        // the page will reload
        e.preventDefault()

        // send the deatails to the backed
        let data={password,email}
       let result=await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        let finalresult=await result.json();
        alert(finalresult) 
    }
  return (
   <>
   <h1>LOGIN FROM</h1>
   <form onSubmit={submitdetails}>
    
        
    <div>
        <label>Email</label>
        <br />
    <input type="text" onChange={(e)=>{setemail(e.target.value)}}/>
    </div>
<br />
    <div>
        <label>Password</label>
        <br />
    <input type="text" onChange={(e)=>{setpassword(e.target.value)}}/>
    </div>
    <br />
    <button type='submit'>Submit</button>
   </form>
   </>
  )
}

export default Login;