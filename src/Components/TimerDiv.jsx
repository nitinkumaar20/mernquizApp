import React from 'react'
import { useContext } from "react";
import { QuizContex } from "./QuizHolder";

 


export default function TimerDiv() {
   const { TimerValue, setTimerValue } = useContext(QuizContex);
   
setTimeout(() => {
  setTimerValue(TimerValue - 1);
}, 1000);
  return (
    <div><h1>{TimerValue}</h1></div>
  )
}
