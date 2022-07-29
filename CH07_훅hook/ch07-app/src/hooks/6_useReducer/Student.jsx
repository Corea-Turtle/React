import React from 'react'

function Student({id,name,isHere,dispatch}) {
  
  return (
    <div>
      <span style={
        {
          textDecoration: isHere?'line-through':'none',
          color: isHere ? 'black':'white',
          cursor:'pointer',
        }
      }
      onClick={()=>{
        dispatch({type:'check-student',payload:{id}})
      }
      }>{`${name}(${id})`}</span>
      <button className='btn btn-outline-danger'
      onClick={(e)=>{
        dispatch({type:'del-student-by-id', payload:{id}})
      }}>삭제</button>    
    </div>
  )
}

export default Student