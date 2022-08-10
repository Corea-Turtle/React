import { Typography } from '@mui/material'
import React from 'react'

function CopyRight() {
  return (
    <Typography variant = 'body2' color='textSecondary' align="inherit">
      {"Copyright @"}
      <i className="fa-brands fa-github" style={{fontSize:'2rem'}}>
        </i>
      hungry hungry hungry 2022

    </Typography>
  )
}

export default CopyRight