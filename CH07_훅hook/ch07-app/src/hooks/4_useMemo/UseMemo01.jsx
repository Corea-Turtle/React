import React, { useMemo, useState } from 'react'
/**
 * Memorization(컴퓨터 최적화를 위해서 사용하는 개념)
 * 이슈 : 동일한 처리를 하는 함수를 반보적으로 호출해야 한다면?
 * 맨 처음 값을 계산할 때 해당 값을 메모리에 저장해서
 * 필요할 때마다 중복 게산 없이 메모리에서 꺼내어 재사용하는 기법
 * 
 * useMemo(콜백함수, 의존성배열[]);
 * (연산량 많은 함수의 결과값을 저장해 두었다가
 *  재호출 시에 이전 결과값을 바로 반환)
 * 
 */


const hardCalculater = (number) => {
  let total = 0;
  // cpu부하 주기
  for (let i = 0; i < 99999999; i++) {
    total += i;
  }
  console.log('복잡한 계산!')
  return number + total;
}

const EasyCalculater = (number) => {
  let total = 0;
  // cpu부하 주기
  for (let i = 0; i < 9; i++) {
    total += i;
  }
  console.log('간단한 계산')
  return number + total;
}

function UseMemo01() {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);
  //const hard = hardCalculater(hardNumber);
  //const hard = useMemo(()=>{
  //  return hardCalculater(hardNumber)
  //});
  const hard = useMemo(()=>{
    return hardCalculater(hardNumber)
    ;},[hardNumber]);
  const easy = EasyCalculater(easyNumber);
  return (
    <div className='container'>

      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Hard working</h5>
        <input
          className='form-control' type='number'
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> ∫∛ ∝^ = {hard}</span>
      </div>
      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Easy working</h5>
        <input
          className='form-control' type='number'
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> ∫∛ ∝^ = {easy}</span>
      </div>
    </div>


  )
}

export default UseMemo01