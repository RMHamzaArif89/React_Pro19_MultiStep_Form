import React from 'react'
import './form.css'

function Address({pre,next}) {
  return (
    <form action="/" className="form">
    <h1>Address</h1>
  <input type="text" placeholder='City' />
  <input type="text" placeholder='Current Address' />
  
 <div className="btns">
 <div className="btn" onClick={pre}>Pre</div>
  <div className="btn" onClick={next}>Next</div>
 </div>
</form>
  )
}

export default Address
