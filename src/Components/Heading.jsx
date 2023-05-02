import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Heading() {

  const [TimerValue, setTimerValue] = useState(60) 
  const end_time = localStorage.getItem('end_time')
  const navigate = useNavigate()
  
  useEffect(()=> {
    const timer = setTimeout(() => {
      setTimerValue(TimerValue - 1);
      const current_time = Date.now()
      if (end_time < current_time) { 
        console.log('end');
        navigate('/submitted');
      }
    }, 1000);
    return(
      () => clearInterval(timer)
    )
  })

  return (
    // <div className="main-div-heading-color-change"> 
      <h2 className="main-div-h2">
        <div><h1>{TimerValue}</h1></div>
      </h2>
    // </div>
  );
}
