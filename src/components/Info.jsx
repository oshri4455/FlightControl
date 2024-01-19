import React from 'react'
import './style.css'

export default function Info() {
  return (
    <div id='divInfo'> 

<div id='divinfo1'>
<h3 style={{color:'white'}}>אודותינו</h3>    
<br />
<a href=""><h5>אודות</h5></a>
 
<a href=""><h5>תנאי שימוש</h5></a>

<a href=""><h5>הצהרת נגישות</h5></a>

<a href=""><h5>דרושים</h5></a>

</div>

<div  id='divinfo2'>

<h3 style={{color:'white'}}>צור קשר</h3>

     
<br />
<a href=""><h5>פניות הציבור</h5></a>

<a href=""><h5>מודיעין טיס</h5></a>


<div style={{position:'relative',right:'700px',top:'-50px'}}>

<h2>Flight Control</h2>

</div>

</div>






    </div>
  )
}
