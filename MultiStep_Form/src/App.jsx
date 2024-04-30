import React from 'react'
import { useState } from 'react'
import './App.css'
import UserDetail from './components/userDetail'
import Address from './components/Address'
import Account from './components/Account'


function App() {
  let[pg,setPg]=useState(0)

function next(){
  setPg(pg+1)
  
}
function pre(){
  setPg(pg-1)
  
}
  let[show,setShow]=useState([<UserDetail next={()=>{next()}} pre={pre}/>
  ,<Address  next={()=>{next()}} pre={pre}/>
  ,<Account/>])

  return (
    <>
    <div className="container">
  {show[pg]}
    
    </div>
    </>
  )
}

export default App
