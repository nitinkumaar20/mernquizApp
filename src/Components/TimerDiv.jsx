import React, { useState, useEffect } from 'react'
import { useContext } from "react";
import { QuizContex } from "./QuizHolder";

 


export default function TimerDiv() {
  //  const { TimerValue, setTimerValue } = useContext(QuizContex);
  const { TimerValue, setTimerValue } = useState(60) 
  const value = localStorage.get('start_time')
  setTimeout(() => {
    setTimerValue(TimerValue - 1);
    const end_time = Date.now()
    if (value < end_time) {
      // submit exam
    }
  }, 1000);
  return (
    <div><h1>{TimerValue}</h1></div>
  )
}
