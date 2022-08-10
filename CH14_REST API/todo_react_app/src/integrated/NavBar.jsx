import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

function NavBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <Typography variant='h6'>오늘의 할 일</Typography>
          </Grid>
          <Button color='inherit' raised="true"></Button>
          <i className="fa-solid fa-arrow-right-from-bracket"> 로그아웃</i>
        </Grid>
      </Toolbar>
    </AppBar>


  )
}

export default NavBar