import React, { useState } from 'react'
import { useEffect } from 'react'

function Timer() {
  const dateTime = new Date();
  const [time,setTime] = useState();
  useEffect(()=>{
    const updateTimer=setInterval(()=>{
      setTime(dateTime.toLocaleTimeString())
      console.log(time);
    }, 1000);

    //마운트 해제시 실행 정지(정리 작업)
    //이게 없으면 계속 돌아감

    //언마운트시 처리 작업
    return ()=>{
      clearInterval(updateTimer);
      console.log('타이머 종료');
    }

  },[time]); //마운트 && 언마운트 시 처리 완료;
  
  
  
  return (
    <div classname='container'>
      <span>현재 시각 : {time}</span>
    </div>
  )
}

export default Timer