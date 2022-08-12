import { Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { API_BASE_URL } from './api-config';

function SignUp() {
  let nav = useNavigate();

  const registerMove = () => {
    nav("/signup");
  }

  const signup = (userDTO) => {
    axios.post(`${API_BASE_URL}/auth/signup`, userDTO)
      .then((res) => {
        nav("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");

    signup({ username: username, password: password });

  }

  return (
    <Container component='main' maxWidth="xs" style={{marginTop:'8%'}}>
    <Grid container spacing={2} style={{marginBottom:'20px'}}>
      <Grid item xs={12}>
        <Typography component="h1" variant='h5'>
        <span>계정 생성</span>
        <i className="fa-solid fa-key"style={{marginLeft:'10px', color:'#ccc'}}></i>
        </Typography>
      </Grid>  
    </Grid>

    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            required
            fullWidth
            id='username'
            name='username'
            label="아이디"
            autoComplete='username'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            required
            fullWidth
            id='password'
            type='password'
            name='password'
            label="비밀번호"
            autoComplete='password'
          />
        </Grid>
        <Grid item xs={12}>
          <Button type='submit' fullWidth variant='contained' color='primary'>
            Create Account
          </Button>
        </Grid>
        <Grid item xs={12} onClick={registerMove}>
        
          <Link to="/signin" variant='body2' style={{textDecoration:'none', color:'steelblue'}} >
          <i className="fa-solid fa-bell" style={{ color: 'crimson', marginRight: '5px' }}></i>
          <span>Already have an account? Please log in here</span>
          </Link>
        </Grid>
      </Grid>
    </form>

  </Container>
  )
}

export default SignUp