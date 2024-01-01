import React, { useState } from "react";
import './style.css'



export default function SortingFlights(props) {





  return (
    <div id="sorFlightDiv">

   <h2 id="sortTitle"> Sort Flight</h2>
      <span 
        style={{
          fontWeight: "bold",
          width: "300px",
          hight: "300px",
          overflow: "hiddin",
          overflowY: "auto",
          alignItems: "center",
        }}
      >
 
      </span>
      <br />
      <div id="select" >{props.select()}</div>
      <div
        style={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        <div id="divTable">
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
    {props.tempFlight.map((val, index) => (
      <tr key={index}>
        <td>{val.id}</td>
        <td>{val.company}</td>
        <td>{val.passengerNumaber}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
      </div>
    </div>
  );
}
