import Start from './Components/Start'
import './App.css'
import Heading from './Components/Heading'
import BodyDiv from './Components/BodyDiv'
import { useContext } from 'react'
import { QuizContex } from './Components/QuizHolder'
import ScoreDiv from './Components/ScoreDiv'




function App() {

const{start,current,data} = useContext(QuizContex);
  return (
    <>

    {
      
      current < data.length ? (start === true ? <Start/> :  <div className="main-div">
      <Heading/>
      
    <BodyDiv/>
     </div>) : <ScoreDiv/>
      
    }
  
    </>
  )
}

export default App
