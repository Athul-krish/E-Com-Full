import { Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div style={{display:'flex', backgroundColor:'gray',alignItems:'center', justifyContent: 'center',alignContent:'center',padding:'10px'}}>

    <Typography variant='body1' >Contact Us</Typography><br />&nbsp;&nbsp;
    <button style={{backgroundColor:'gray',border:'0px'}}><InstagramIcon/></button>
    <button style={{backgroundColor:'gray',border:'0px'}}><XIcon/></button>

    </div>
  )
}

export default Footer
