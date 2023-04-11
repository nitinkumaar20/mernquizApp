import React, { useContext } from "react";
import { QuizContex } from "./QuizHolder";

export default function ColorChangingDiv() {
  const { changeColor, setChangeColor } = useContext(QuizContex);
  const giveValueColor = (e) => {
    setChangeColor(e.target.id);
    console.log(changeColor);
  };
  return (
    <div className="color-changer-div">
      <div
        className="color-changer one"
        id="one"
        onClick={giveValueColor}
      ></div>
      <div
        className="color-changer two"
        id="two"
        onClick={giveValueColor}
      ></div>
      <div
        className="color-changer third"
        id="third"
        onClick={giveValueColor}
      ></div>
    </div>
  );
}
