import React from 'react'
import { createContext,useState } from 'react'

const QuizContex =createContext();

const data = [{
    Question: "1:HTML stands for-",
    a: "HighText Machine Language",
    b: "HyperText and links Markup Language",
    c: "HyperText Markup Language    ",
    d: "None of these",
    ans: "ans3"
},
{   Question: "2:The correct sequence of HTML tags for starting a webpage is",
a: "Head, Title, HTML, body",
b: "HTML, Body, Title, Head",
c: "HTML, Head, Title, Body",
d: "HTML, Head, Title, Body",
ans: "ans4"

},
{   Question: "3: Which of the following element is responsible for making the text bold in HTML?",
a: "<pre>",
b: "<a>",
c: "<b>",
d: "<br>",
ans: "ans3"

},
{   Question: "4: Which of the following tag is used for inserting the largest heading in HTML?",
a: "<h3>",
b: "<H1>",
c: "<H5>",
d: "<H6>",
ans: "ans2"

},
{   Question: "5: Which of the following tag is used to insert a line-break in HTML?",
a: "<br>",
b: "<a>",
c: "<pre>",
d: "<b>",
ans: "ans1"

}]


export default function QuizHolder(props) {

const [start, setStart] = useState(true);
const [score, setScore] = useState(0);
const [current, setCurrent] = useState(0);
const [changeColor, setChangeColor] = useState('')
  return (
    <QuizContex.Provider value={{start,setStart,data,score,setScore,setCurrent,current,changeColor,setChangeColor}}>
        {props.children}
    </QuizContex.Provider>
  )
}

export {QuizContex};
