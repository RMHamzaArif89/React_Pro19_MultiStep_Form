import React, { useState } from 'react'
import './form.css'

function Account({pre}) {
    let[state,setState]=useState(false)
    if(state){
        alert('login the form')
    }
  return (
    <form action="/submit" className="form">
      <h1>Enter User Details</h1>
    <input type="email" placeholder='Email' />
    <input type="password" placeholder='Password' />
    
   <div className="btns">
   <div className="btn" onClick={pre}>Pre</div>
    <button className="btn" type='submit' onClick={setState(!state)} style={{outline:'none'}}>Submit</button>
   </div>
 </form>
  )
}

export default Account
