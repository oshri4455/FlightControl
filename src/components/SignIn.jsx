import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

export default function SignIn(props) {
const [idFlight,setIdFlight] = useState('')

const nav = useNavigate()


const signIn = ()=>{
if(idFlight != '12345'){
    alert('user Name eror')
    return


}
else{
  props.setFlag(true)
  nav('/ControlPanel')

}
}
  return (

    <div id='divLogin'>
    <h2 id='loginTitle'>Login Admin</h2>
<input id='inptLogin' onChange={(e)=>{setIdFlight(e.target.value)}} type="text" placeholder='מספר מזהה' />
<br />
<button id='btnLogin'  className="btn btn-dark" onClick={signIn}  >כניסה</button>

    </div>
  )
}
