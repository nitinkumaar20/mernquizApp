import React from 'react'
import { useContext } from 'react'
import { QuizContex } from './QuizHolder'

export default function Start() {
  const {setStart} = useContext(QuizContex);
  const startQuiz = ()=>{
    setStart(false);

  }
  return (
    <div className='start-div'><h2 onClick={startQuiz}>start</h2></div>
  )
}
