import Start from './Components/Start'
import './App.css'
import Heading from './Components/Heading'
import BodyDiv from './Components/BodyDiv'
import { useContext } from 'react'
import { QuizContex } from './Components/QuizHolder'
import ScoreDiv from './Components/ScoreDiv'
import SubmitDiv from './Components/SubmitDiv'
import TimerBody from './Components/TimerBody'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import Exple from './Components/Exple'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp'





function App() {
  const{start,IndexValue,data,Timer,setTimer} = useContext(QuizContex);


  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact path="/body"
            element={
              Timer ? (
                <SubmitDiv />
              ) : start === true ? (
                <Start />
              ) : (
                <div className="main-div">
                  <Heading />
                  {/* <TimerBody /> */}
                  <BodyDiv />
                </div>
              )
            }
          />
          <Route exact path="/SignUp" element={<SignUp />} />
          {/* <Route path="/dsf" element={<NavBar />} /> */}
        </Routes>
      </BrowserRouter>
      {}
    </>
  );
}

export default App
