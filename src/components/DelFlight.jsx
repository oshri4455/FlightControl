import React from 'react'
import { useState } from 'react'

export default function DelFlight(props) {
    const [numberFlight,setNumberFlight] = useState('')
    const handleDelete = () => {
        const numericFlightId = Number(numberFlight);
        const flightExists = props.planOpt.some(flight => flight.id === numericFlightId.toString());
      
        if (flightExists) {
          alert('The flight was successfully deleted')
          props.del(numericFlightId);
        } else {
          alert('Flight number not found');
        }
      };
      return (
        <div id='divdel'>
          <h2>Del Flight</h2>
          <div id='divDel'>
          <input 
            id='inptDel' 
            onChange={(e) => setNumberFlight(e.target.value)} 
            type="text" 
            placeholder='numberFlight' 
          />
          <br />
          <button 
            id='btnDel' 
            onClick={handleDelete} 
            className="btn btn-dark"
          >
            Del
          </button>
        </div>
        </div>
      );
    }