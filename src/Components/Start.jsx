import React from 'react'
import { useContext } from 'react'
import { QuizContex } from './QuizHolder'

export default function Start() {
  const { setStart, setTimer, TimerValue,setTimerValue } = useContext(QuizContex);

  const startQuiz = ()=>{
    setStart(false);

 setTimeout(() => {
   setTimer(true);
 }, 60000);
  }
  
  return (
    <div className='start-div'><h2 onClick={startQuiz}>start Exam</h2></div>
  )
}
