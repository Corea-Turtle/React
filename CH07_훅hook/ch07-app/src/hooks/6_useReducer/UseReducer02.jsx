import React, { useState } from 'react'
import { useReducer } from 'react';

const ACTION_TYPES={
  DEPOSIT : 'deposit',
  WITHDRAW : 'withdraw',
}

const reducer = (state,action) => {
  console.log(state, action);
  switch(action.type){
    case ACTION_TYPES.DEPOSIT:
      if(action.payload>0){
        return state + action.payload;
      }
      break;
    case ACTION_TYPES.WITHDRAW:
      if(state>=action.payload&&action.payload>0){
        return state - action.payload;
      }
      break;
    default:
      return state;
  } 
}

function UseReducer02() {
  const [money,setMoney] = useState(0);
  //const [상태변수, 변경함수] = useReducer(reducer는 외부에 선언,0은 초기값); [state,dispatch함수]
  const [account, dispatch] = useReducer(reducer,0);// [state,dispatch]
  return (
    <div className='container'>
      <h6>useReducer은행에 오신 것을 환영합니다.</h6>
      <h1>잔고 : {account}원</h1>
      <div>
        <input className='form-control mb-2'
        type={'number'}
        value={money}
        step='1000'
        onChange={(e)=>{setMoney(parseInt(e.target.value))}}
        />
        <button className='btn btn-success'
          onClick={()=>{dispatch({type:ACTION_TYPES.DEPOSIT,payload:money})}}>예금</button>
        <button className='btn btn-danger'
          onClick={()=>{dispatch({type:ACTION_TYPES.WITHDRAW,payload:money})}}>출금</button>
      </div>
    </div>
  )
}

export default UseReducer02