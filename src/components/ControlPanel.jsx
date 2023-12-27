import React from 'react'
import { Link } from 'react-router-dom'

export default function ControlPanel() {

  return (
    <div id='div'>

<Link to={'/allFlight'}><button id='btn'  className="btn btn-dark" >כל הטיסות</button></Link> 
<br /> 
<Link to={'/sort'}><button id='btn' className="btn btn-dark" >מיון טיסות</button></Link>
<br />
<Link to={'/add'}><button id='btn' className="btn btn-dark"  >הוסף טיסה</button></Link>
<br />
<Link to={'/delFlight'} ><button id='btn' className="btn btn-dark" >מחק טיסה</button></Link>



    </div>
  )
}
