import React from 'react'
import CopyRight from './CopyRight'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Box } from '@mui/material'


function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          
        </Routes>
      </BrowserRouter>
      <Box mt={5} >
        <CopyRight />
      </Box>

    </div>
  )
}

export default AppRouter