import React from 'react'
import './form.css'

function UserDetail({pre,next}) {
  return (
 <form action="/" className="form">
      <h1>Enter User Details</h1>
    <input type="text" placeholder='Name' />
    <input type="text" placeholder='Age' />
    <input type="text" placeholder='Height' />
   <div className="btns">
   <div className="btn" onClick={pre}>pre</div>
    <div className="btn" onClick={next}>Next</div>
   </div>
 </form>
  )
}

export default UserDetail
