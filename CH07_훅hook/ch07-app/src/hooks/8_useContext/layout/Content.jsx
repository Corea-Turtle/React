import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'
import Java from '../pages/Java';
import JavaScript from '../pages/JavaScript';
import Main from '../pages/Main';
import Reacts from '../pages/Reacts';
import Springboot from '../pages/Springboot';
import Slider from '../ui/Slider';

const styles = {
  h5: {
    marginTop: 100,
  },
  main: {
    height: 748,
    color: 'gray',
    backgroundColor: 'white',
  }
}

function Content() {
  const {isDark} = useContext(ThemeContext);

  const setDark=()=>{
    return {...styles.main, color:'#eee',backgroundColor:'#888'}
  }

  return (
    <main style={isDark? styles.main: setDark()}>
      <div className='container text-center'>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/js' element={<JavaScript/>}/>
          <Route path='/reacts' element={<Reacts/>}/>
          <Route path='/java' element={<Java/>}/>
          <Route path='/sb' element={<Springboot/>}/>
        </Routes>
      </div>
    </main>

  )
}

export default Content