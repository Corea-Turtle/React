import React from 'react'
import { useState } from 'react'

function FruitSelect() {
  const [value, setValue] =useState('');

  const handleChange= (e)=>{
    setValue(e.target.value);
  }

  const handleSubmit =(e)=>{
    alert('선택한 음식: ' +value);
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h5>음식을 선택하세요 :</h5>
        <select className='form-select' value={value} onChange={handleChange}>
          <option value="apple">🍏</option>
          <option value="abocado">🥑</option>
          <option value="banana">🍌</option>
          <option value='melon'>🍈</option>
          <option value='coconut'>🥥</option>
          <option value='cherry'>🍒</option>
          <option value='grape'>🍇</option>
          <option value='lemon'>🍋</option>
        </select>
      </label>
        <button className='btn btn-success ms-1' type='submit'>Submit</button>

    </form>
  )
}

export default FruitSelect