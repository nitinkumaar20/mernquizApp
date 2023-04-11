import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import QuizHolder from './Components/QuizHolder'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizHolder>
    <App />
    </QuizHolder>

  </React.StrictMode>,
)
