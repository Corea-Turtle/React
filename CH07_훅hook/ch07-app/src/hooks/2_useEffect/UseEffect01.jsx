import React, { useState } from 'react'
import { useEffect } from 'react';
/**클래스 컴포넌트 생명주기 함수
 * useEffect(콜백함수,의존성배열[의존성 변수1, 의존성 변수 2, ... , , , ]);
 * 
 * useEffect( ()=>{}, [] ); 의존성배열이 없는경우, 1개만 있는 경우, 여러개 있는 경우로 나뉜다.
 */
 const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}
 
//useEffect 테스트
let kiwis=[];


function UseEffect01() {
  const [count,setCount] = useState(0);

  useEffect(()=>{
    if(count===0) kiwis=[];
    kiwis.push('🚓');

    document.title='🌍' + count + 'update'

  },[count])

  return (
    <div className='container' style={styles.container}>
 
    <span>{kiwis+'💨'+count}</span>
    <hr></hr>
    <p className='h3'>You clicked {count} times</p>
    <hr />

    <button className='btn btn-info' style={styles.btn}
      onClick={() => {
        setCount(count + 1);
      }}>

      <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
      <br />
      <span>Click Me</span>
    </button>

  </div>



  )
}

export default UseEffect01