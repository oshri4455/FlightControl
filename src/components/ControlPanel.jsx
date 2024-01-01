import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Info from './Info'
import AddFlight from './AddFlight'

export default function ControlPanel(props) {
  const handleShowAllFlights = () => {
    props.setFlag(false); // מסתיר את AddFlight בעת לחיצה על "כל הטיסות"
  }

  return (
    <div id='div'>
 <button onClick={props.toggleAllFlight} id='btn' className="btn btn-dark">כל הטיסות</button>
      <button onClick={props.toggleAddFlight} id='btn' className="btn btn-dark">הוסף טיסה</button>
     

<button onClick={props.toggleSortlight} id='btn' className="btn btn-dark" >מיון טיסות</button>

<button onClick={props.toggleDelFlight} id='btn' className="btn btn-dark" >מחק טיסה</button>
<Link to={'/'}><button id='btn' onClick={props.toggleExit} className="btn btn-dark">יציאה</button></Link>




    </div>
  )
}
