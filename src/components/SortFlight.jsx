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
        <table id="table">
<tr id="tr">
<th className='th'>flight Number</th>
<th className='th'>Company Name</th>
<th className='th'>Passenger</th>

</tr>


        </table>
        {props.tempFlight.map((val) => {
          return (
            <tr id="tr">
            <td className='td' style={{color:'red'}}>{val.id}</td>
            <td className='td' style={{color:'red'}}>{val.company}</td>
            <td className='td' style={{color:'red'}}>{val.passengerNumaber}</td>
            </tr>
            
            
          );
        })}
      </div>
    </div>
  );
}
