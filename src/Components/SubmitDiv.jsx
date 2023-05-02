import { React, useContext } from "react";
import { QuizContex } from "./QuizHolder";


export default function SubmitDiv() {
  const { score, setStart, start } = useContext(QuizContex);

  return (
    <div className="score-div">
      <div className="score-div-area">
        <h2>{`Successufully Submit`}</h2>
        <h2>{`Your Score is ${score}`}</h2>
      </div>
    </div>
  );
}
