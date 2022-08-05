import React from 'react'

function Todo() {
  return (
    <div className='Todo'>
      <input
        type='checkbox'
        id={props.item.id}
        name={props.tem.id}
        checked={props.item.done}

      />
      <label id={props.item.id}>{props.item.title}</label>
    </div>
  )
}

export default Todo