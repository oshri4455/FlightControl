import React from 'react'
import anime from 'animejs/lib/anime.es.js';
import { useState } from 'react';
export default function 



(props) {


  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    anime({
      targets: document.documentElement,
      scrollTop: document.documentElement.scrollHeight,
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  };
  return (
    <div>

<button style={{position:'relative',top:'-450px',width:'100px',height:'40px',backgroundColor: 'rgb(3, 105, 71)',color:'white'}} onClick={()=>{handleLoginClick();props.toggleLogin()}} id='btnLogin'  >התחברות</button>


    </div>
  )
}
