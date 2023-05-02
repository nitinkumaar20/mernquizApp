import React from 'react'
import ColorChangingDiv from './ColorChangingDiv'
import QuesDiv from './QuesDiv'



export default function BodyDiv() {

  return (
    <>
    <div className="inner-main-div ">
        <ColorChangingDiv/>
        <QuesDiv/> 
    </div>
    </>
  )
}
