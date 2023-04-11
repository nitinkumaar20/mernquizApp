import { useContext, React, useState } from "react";

import { QuizContex } from "./QuizHolder";

export default function ScoreDiv() {
  const { score,setStart,start} = useContext(QuizContex);
const startDivChnage = ()=>{
    window.location.reload();
}
  return (
    <div className="score-div">
      <div className="score-div-area">
        <h2>{`Your Score is ${score}`}</h2>
        <button
          onClick={startDivChnage} className='play-again'
        >Play Again</button>
      </div>
    </div>
  );
}
