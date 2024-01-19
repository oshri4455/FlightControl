import React from 'react'

export default function Contact() {
  return (



    <div style={{position:'relative',top:'-170px',left:'50%',transform:'translate(-50%)',width:'400px',height:'400px',backgroundColor:'white',border:'black'}}>
<br />
<br />
<h3>צור קשר</h3>
<br />
<br />
<label style={{fontSize:'20px',color:'black'}} htmlFor="">שם מלא:</label>
<input type="text"  />
<br />
<br />
<label style={{fontSize:'20px',color:'black'}} htmlFor="">טלפון:</label>
<input type="text" />
<br />
<br />
<button className="btn btn-dark" style={{width:'150px',height:'40px'}}>שלח</button>






    </div>
  )
}
