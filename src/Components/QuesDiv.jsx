import { useContext, React, useState,useEffect } from "react";
import { QuizContex } from "./QuizHolder";
import { useNavigate } from 'react-router-dom';

export default function QuesDiv() {
  const {
    data,
    setScore,
    setIndexValue,
    IndexValue,
    score,
    changeColor,
 
  } = useContext(QuizContex);

  const navigate = useNavigate()
  const [select, setSelect] = useState("");
  const [optionSelect, setOptionSelect] = useState("color");
  const [hid, setHid] = useState("need-to-select-hid");
  const num_of_quiz = data.length;

  const submitBtn = () => {
    
    setHid("need-to-select-hid");
    setSelect("");
    if (select) {
      // yaha pr hamne sir select use kiya hai matlab agr object khali hai tho false agr value mil gyi tho true ho jayega
      if (select === data[IndexValue].ans) {
        setScore(score + 1);
      }
      if (IndexValue < num_of_quiz-1) {
        setIndexValue(IndexValue + 1); 
      }
      else{
        navigate('/submitted');
      }
    } else {
      setHid("");
      setHid("need-select");
    }
    
  };

  const onchange = (e) => {
    setSelect("");
    setOptionSelect("");

    setSelect(e.target.id);
    setOptionSelect("color2");
  };
 
 

  
  return (
    <>
      <div className={`inner-div-quesstion ${changeColor}`}>
        <h2 className="question">{data[IndexValue].Question}</h2>

        <ul>
          <li
            className={select === "ans1" ? `answer color` : "answer"}
            id="ans1"
            onClick={onchange}
          >
            {data[IndexValue].a}
          </li>
          <li
            className={select === "ans2" ? `answer color` : "answer"}
            id="ans2"
            onClick={onchange}
          >
            {" "}
            {data[IndexValue].b}
          </li>
          <li
            className={select === "ans3" ? `answer color` : "answer"}
            id="ans3"
            onClick={onchange}
          >
            {data[IndexValue].c}
          </li>
          <li
            className={select === "ans4" ? `answer color` : "answer"}
            id="ans4"
            onClick={onchange}
          >
            {data[IndexValue].d}
          </li>
        </ul>

        <button className="submitButton" id="submit" onClick={submitBtn}>
          submit
         
        </button>

        <div className={`${hid}`}>need to select</div>
      </div>
    </>
  );
}
