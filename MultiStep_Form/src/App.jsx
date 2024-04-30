import React from 'react'
import { useState } from 'react'
import './App.css'
import UserDetail from './components/userDetail'
import Address from './components/Address'
import Account from './components/Account'


function App() {
  let[pg,setPg]=useState(0)
  let[state,setState]=useState(false)
    if(state){
        alert('login the form')
    }

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
  let[show,setShow]=useState([<UserDetail/>
  ,<Address/>
  ,<Account/>])

  return (
    <>
    <div className="container">
      <div className="page">
        {pg+1}/{show.length}
      </div>
  {show[pg]}

<div className="btns">
{pg<show.length-1 && <div className="btn" onClick={()=>{next()}}>next</div>}
{pg!=0 && <div className="btn" onClick={()=>{pre()}}>pre</div>}
{pg==show.length-1 && <div className='btn' onClick={setState(!state)}>Submit</div>}
</div>
    
    </div>
    </>
  )
}

export default App
