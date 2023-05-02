import React, { useEffect, useState } from 'react';  
import Heading from '../Heading';
import BodyDiv from '../BodyDiv';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Main = () => {
    const navigate = useNavigate();
    const [quizStart, setQuizStart] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
        const decode = jwt_decode(token);
          if (!((decode.exp*1000) > Date.now())) {
            navigate('/')
          } 
      }else{
        localStorage.removeItem('token');
        navigate('/')
      }
    }, [])
    
    
  const startQuiz = async () => {
      const time =( Date.now() + 60000 ) // for one minutes add 60000 milisecond
      localStorage.setItem('end_time', time)
      setQuizStart(true)
  }


  return (
    <>
        {
            !quizStart ? 
                (<div className='start-div'>
                    <h2 onClick={startQuiz}>
                        start Exam
                    </h2>
                </div>) 
                :
                (<>
                    <Heading />
                    <BodyDiv />
                </>)
        }
        
    </>
  )
}

export default Main;
