import React, { useState } from 'react'

const styles = {
  container: {
    padding: 100,
 //   display: 'flex',
    flexDirection: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}

function UseState03() {

  const [clickTimes, setClickTimes] = useState(0);

  const clickTimesHandler = () => {
    setClickTimes(clickTimes + 1)
  }

  return (
    <div className='container' style={styles.container}>
      <p>You clicked {clickTimes} Times</p>
      <button className='btn btn-info' style={styles.btn} onClick={clickTimesHandler}>
        <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
        <br/>Click me</button>
    </div>


  )
}

export default UseState03