import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Box(props) {
  const [style,setStyle] = useState({}); // 빈 오브젝트로 초기화

  useEffect(()=>{
    setStyle(props.createBoxStyle)
    return
  },[props.createBoxStyle]);
  
  return (
    <div style={style}>

    </div>
  )
}

export default Box