import React from 'react'

const styles={
  avatar:{
    width : 50,
    height : 50,
    borderRadius : '50%',
  }
}

function Avatar(props) {
  return (
    <>
      <img src={props.url} alt='avatar-img' style ={styles.avatar}/>
    </>
  )
}

export default Avatar;