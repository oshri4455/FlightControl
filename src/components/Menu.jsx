import React from 'react'
import { Link } from 'react-router-dom'
import Info from './Info'

export default function 



(props) {
  return (
    <div id='div'>

<button onClick={props.toggleAllFlight} id='btn' className="btn btn-dark">כל הטיסות</button>
   

<button onClick={props.toggleSortlight} id='btn' className="btn btn-dark" >מיון טיסות</button>

<button onClick={props.toggleLogin} id='btn'  className="btn btn-dark">התחברות</button>








    </div>
  )
}
