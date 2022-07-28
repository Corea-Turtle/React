import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';

function UseCallback02() {
  const [number,setNumber] = useState(0);

  //  const someFucntion=()=>{
  //    console.log(`someFunc.number:${number}`)
  //  }

  const someFucntion=useCallback(()=>{
    console.log(`someFunc.number:${number}`)
  },[number])

  useEffect(()=>{
    console.log(`someFunction이 변경되었습니다.number:${number}`)
  },[someFucntion])


  return (
    <div className='container'>
      <input className='form-control'
      type={'number'}
      value={number}
      onChange={(e)=>{setNumber(e.target.value)}}/>
      <button className='btn btn-info
        'onClick={someFucntion}
      >Call someFunc</button>
    </div>
    
  )
}

export default UseCallback02