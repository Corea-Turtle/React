import React, { useState } from 'react'
import Child from './Child';

const Parents =()=> {
  const [parentAge,setParentAge] = useState(0);
  const [childAge,setChildAge] = useState(0);

  const increasementParentAge = ()=>{
    setParentAge(parentAge+1);
  }
  const increasementChildAge = ()=>{
    setChildAge(childAge+1)
  }

  return (
    <div className='container border border'>
      <div className='alert alert-info'>
        <h5>
          <i className="fa-solid fa-person-breastfeeding"></i>
          <span>age : {parentAge}</span>
        </h5>
      </div>
      <div className='mb-3'>
        <button className='btn btn-secondary mr-2'
        onClick={increasementParentAge}>부모나이 증가 + </button>
        <button className='btn btn-secondary'
        onClick={increasementChildAge}>자식나이 증가 + </button>
      </div>
      <Child name={'우영우'} age={childAge}/>
    </div>



  )
}

export default Parents
