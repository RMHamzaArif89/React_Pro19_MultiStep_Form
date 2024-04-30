import React from 'react'
import './form.css'

function Account() {
  return (
    <form action="/submit" className="form">
      <h1>Enter User Details</h1>
    <input type="email" placeholder='Email' />
    <input type="password" placeholder='Password' />
    
   <div className="btns">
   <div className="btn">Pre</div>
    <button className="btn" type='submit' style={{outline:'none'}}>Submit</button>
   </div>
 </form>
  )
}

export default Account
