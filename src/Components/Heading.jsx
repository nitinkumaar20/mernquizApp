import React from 'react'
import TimerDiv from './TimerDiv'


export default function Heading() {
  return (
    <div className="main-div-heading-color-change">
      {/* <h2 className="main-div-h2">Quiz app</h2> */}
      <h2 className="main-div-h2">{<TimerDiv />}</h2>
    </div>
  );
}
