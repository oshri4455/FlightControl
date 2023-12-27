import React from 'react'
import { useState } from 'react'

export default function DelFlight(props) {
    const [numberFlight,setNumberFlight] = useState('')
    const handleDelete = () => {
        const numericFlightId = Number(numberFlight);
        const flightExists = props.planOpt.some(flight => flight.id === numericFlightId.toString());
      
        if (flightExists) {
          props.del(numericFlightId);
        } else {
          alert('Flight number not found');
        }
      };
      return (
        <div>
          <h2>Del Flight</h2>
          
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
      );
    }