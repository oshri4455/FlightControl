import React from 'react'
import './style.css'



export default function AllFlight(props) {




  return (
   
    <div >
       {props.lockFlight()}
      <h2 id='h2'>All flight</h2>
     
      <table className="custom-table">
  <thead>
    <tr>
      <th>מספר טיסה</th>
      <th>שם החברה</th>
      <th>מספר נוסעים</th>
    </tr>
  </thead>
  <tbody>
    {/* הוספת נתוני הטבלה כאן על ידי לולאת מיפוי */}
    {props.newFlight.map((val, index) => (
      <tr key={index}>
        <td>{val.id}</td>
        <td>{val.company}</td>
        <td>{val.passengerNumaber}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}
