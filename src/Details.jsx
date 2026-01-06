import React from 'react'

function Details() {
    let details= {
     name:"sneha",
      age:22,
      city:"bangalore"
  }
  return (
   <>
   <div style={{border:"1px solidblack",backgroundColor:"lightgrey",}}>
    <h1>Hello {details}</h1>
    <p>name:{name}</p>
    <p>age:{age}</p>
    <p>city:{city}</p>
   </div>
   </>
  )
}

export default Details