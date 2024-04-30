import React from 'react'
import { useState } from 'react'
import './App.css'
import UserDetail from './components/userDetail'
import Address from './components/Address'
import Account from './components/Account'


function App() {
  let[pg,setPg]=useState(0)

function next(){
  
  
setPg(
  (i)=>{
 if(i>=show.length-1) return i
 return i+1
  }
)
  
}
function pre(){
  setPg(
    (i)=>{
   if(i==0) return show.length-1
   return i-1
    })
 
  
}
  let[show,setShow]=useState([<UserDetail next={()=>{next()}}/>
  ,<Address  next={()=>{next()}} pre={()=>{pre()}}/>
  ,<Account pre={()=>{pre()}}/>])

  return (
    <>
    <div className="container">
      <div className="page">
        {pg+1}/{show.length}
      </div>
  {show[pg]}

  <div className="next" onClick={()=>{next()}}>next</div>
    
    </div>
    </>
  )
}

export default App
