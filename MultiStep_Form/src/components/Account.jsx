import React, { useState } from 'react'
import './form.css'

function Account() {
  return (
    <form action="/submit" className="form">
      <h1>Enter User Details</h1>
    <input type="email" placeholder='Email' />
    <input type="password" placeholder='Password' />
 </form>
  )
}

export default Account
