import React, { useState } from "react";



export default function SortingFlights(props) {





  return (
    <div>

   <h2>Sort Flight</h2>
      <span
        style={{
          fontWeight: "bold",
          marginTop: "5px",
          width: "300px",
          hight: "300px",
          overflow: "hiddin",
          overflowY: "auto",
          alignItems: "center",
        }}
      >
 
      </span>
      <br />
      <div>{props.select()}</div>
      <div
        style={{
          fontWeight: "bold",
          color: "black",
        }}
      >
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
  );
}
