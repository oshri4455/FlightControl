import React from 'react'
import { Link } from 'react-router-dom'
import Info from './Info'
import { animateScroll as scroll } from "react-scroll";
export default function 



(props) {


  const handleShowElenent = ()=>{
    scroll.scrollToBottom()
  }




  return (
    <div id='div'>

<button onClick={()=>{handleShowElenent();props.toggleAllFlight()}} id='btn' className="btn btn-dark">כל הטיסות</button>
   

<button onClick={()=>{handleShowElenent();props.toggleSortlight()}} id='btn' className="btn btn-dark" >מיון טיסות</button>
<button onClick={()=>{handleShowElenent();props.toogleAbut()}} id='btn' className="btn btn-dark">אודות</button>
<button onClick={()=>{handleShowElenent();props.toogleContact()}} id='btn' className="btn btn-dark">צור קשר</button>










    </div>
  )
}
