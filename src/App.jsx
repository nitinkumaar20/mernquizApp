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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp'
import Main from './Components/main/Main'
import Admin from './Components/admin/Admin'



function App() {
  const{start,IndexValue,data,Timer,setTimer} = useContext(QuizContex);

  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/body" element={ <Main />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/submitted" element={<SubmitDiv />} />
          <Route exact path="/admin" element={<Admin />} />
          {/* <Route path="/dsf" element={<NavBar />} /> */}
        </Routes>
      </BrowserRouter>
      {}
    </>
  );
}

export default App
