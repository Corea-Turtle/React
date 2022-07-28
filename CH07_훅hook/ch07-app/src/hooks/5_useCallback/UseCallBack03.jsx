import React, { useState } from 'react'
import { useCallback } from 'react';
import Box from './Box'

function UseCallBack03() {

  const [size, setSize] = useState(100);
  const [isDark, setIsDark] =useState(false);

  // const createBoxStyle = ()=>{
  //   return{
  //     backgroundColor : 'yellowgreen',
  //     width : `${size}px`,
  //     height : `${size}px`
  //   }
  // }

  const createBoxStyle = useCallback(()=>{
    return{
      backgroundColor : 'yellowgreen',
      width : `${size}px`,
      height : `${size}px`
    }
  },[size])

  return (
    <div style={{backgroundColor: isDark?'#FFF':'black'}}>
      <button className='btn btn-primary' onClick={()=>setIsDark(!isDark)} >Change Theme</button>
      <input className='form-control' type={'number'} value={size}
        onChange={(e) => setSize(e.target.value)} />
      <br />

      <Box createBoxStyle={createBoxStyle}/>

    </div>
  )
}

export default UseCallBack03