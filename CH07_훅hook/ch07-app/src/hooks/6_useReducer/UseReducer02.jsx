import React, { useState } from 'react'

function UseReducer02() {
  const [money,setMoney] = useState(0);

  return (
    <div className='container'>
      <h6>useReducer은행에 오신 것을 환영합니다.</h6>

      <h1>잔고 : 1000</h1>
      <div>
        <input className='form-control mb-2'
        type='number'
        step='1000'
        />
        <button className='btn btn-success'>예금</button>
        <button className='btn btn-alert'>출금</button>
      </div>
    </div>

  )
}

export default UseReducer02