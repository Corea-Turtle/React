import React, { useState } from 'react'
import { useEffect } from 'react';

function UseEffect02() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('NickName');


  const updateInput=(e)=>{
    setName(e.target.value)
  }

  const updateCount = (e)=>{
    setCount(count+ 1)
  }

  useEffect(()=>{
    if(count){
      console.log("Count 변경시: '🍕'");
    }
  },[count]);

  useEffect(()=>{
    if(name){
      console.log("Name 변경시: '🍔'");
    }
  },[name]);

  //최초 마운팅 될 때만...
  useEffect(()=>{
    console.log("🌭")
  },[])

  return (
    <div className='container'>
      <p>COUNT: {count}</p>
      <button className='btn btn-success'
      onClick={updateCount}>Update</button>
      <div>
        <input type='test' onClick={updateInput}/>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default UseEffect02