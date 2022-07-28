import React, { useState } from 'react'

function UserState02() {

  const [input,setInput] = useState(''); //useState(초기값)
  const [names,setNames] = useState([]);

  const inputChangeHandler=(e)=>{
    setInput(e.target.value);
    //console.log(input);
  }

  const uploadHandler =()=>{
    setNames((preState)=>{
      console.log(preState)
      return [...preState, input] //return [...preState, input + '\n']
    });
  }
  return (
    <div className = 'container'>
      <div style={{display:'flex'}}>
        <input type='text' className='form-control' placeholder ='이름을 입력해주세요.' style={{width:'300px'}}
        onChange={inputChangeHandler}/>
        <button className='btn btn-danger ms-1' onClick={uploadHandler}>업로드</button>
      </div>
      <textarea className='form-control mt-1'
        defaultValue={names.toString().split(',').join('\n')} //defaultValue={names.toString().split(',').join('')}
      rows='10'/>
    </div>
  )
}

export default UserState02