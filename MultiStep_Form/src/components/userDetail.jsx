import React from 'react'
import './form.css'

function UserDetail() {
  return (
 <form action="/" className="form">
      <h1>Enter User Details</h1>
    <input type="text" placeholder='Name' />
    <input type="text" placeholder='Age' />
    <input type="text" placeholder='Height' />
 </form>
  )
}

export default UserDetail
