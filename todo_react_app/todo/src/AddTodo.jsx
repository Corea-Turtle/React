import {React, useState } from 'react'
import { Button, Grid, Paper, TextField } from '@mui/material'

function AddTodo(props) {
  //사용자로부터 입력을 저장할 오브젝트
  const [item, setItem] = useState({ title: 'JPA 공부하기' });
  const addItem = props.addItem;



  return (
    <Paper style={{margin:16,padding:32}}>
      <Grid container>
        <Grid item xs={11} md={11} style={{paddngRight:16}}>
          <TextField
            placeholder='add Todo here'
            fullWidth value={item.title}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
          color = 'secondary' variant='outlined' fullWidth style={{height:'100%'}}>
            +
          </Button>
        </Grid>
      </Grid>

    </Paper>
  )
}

export default AddTodo