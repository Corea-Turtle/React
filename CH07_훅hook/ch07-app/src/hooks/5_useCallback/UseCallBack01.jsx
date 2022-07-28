import React, { useCallback } from 'react'


/**
 * useCallBack(0)
 * 
 * useMemo()
 * 값이 아닌 함수를 반환
 * 
 * 자바스크립트에서 함수는 객체의 한 종류이다.
 */


function UseCallBack01() {

  const memo = useCallback();

  return (
    <div>UseCallBack01</div>
  )
}

export default UseCallBack01