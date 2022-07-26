import React from 'react'

function Dtime() {
    let dd= new Date().toLocaleDateString();
    let tt= new Date().toLocaleTimeString();

  return (
    <div>Dtime</div>
  )
}

export default Dtime