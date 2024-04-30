import React from 'react'
import './form.css'

function Address() {
  return (
    <form action="/" className="form">
    <h1>Address</h1>
  <input type="text" placeholder='City' />
  <input type="text" placeholder='Current Address' />
</form>
  )
}

export default Address
