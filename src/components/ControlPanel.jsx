import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Info from './Info'
import AddFlight from './AddFlight'
import './style.css'
import AllFlight from './AllFlight'
import { animateScroll as scroll } from "react-scroll";

export default function ControlPanel(props) {
 

  const handleShowAllFlights = () => {
    scroll.scrollToBottom();
  };

const handleShowElenent = ()=>{
  scroll.scrollToBottom()
}

  return (
    <div id='div'>
 <button onClick={()=>{handleShowAllFlights();props.toggleAllFlight()}} id='btn' className="btn btn-dark">כל הטיסות</button>
      <button onClick={()=>{handleShowElenent();props.toggleAddFlight()}} id='btn' className="btn btn-dark">הוסף טיסה</button>
     

<button onClick={()=>{handleShowElenent();props.toggleSortlight()}} id='btn' className="btn btn-dark" >מיון טיסות</button>

<button onClick={()=>{handleShowElenent();props.toggleDelFlight()}} id='btn' className="btn btn-dark" >מחק טיסה</button>
<Link to={'/'}><button id='btn' onClick={props.toggleExit} className="btn btn-dark">יציאה</button></Link>




    </div>
  )
}
