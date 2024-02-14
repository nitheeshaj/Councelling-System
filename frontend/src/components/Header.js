import React, { useState } from 'react'
import {AppBar, Icon, Toolbar, Tabs, Tab, Typography} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import {NavLink} from 'react-router-dom'


const Header = () => {
  const [value, setValue]=useState()
  return (
    <div>
    <AppBar sx={{backgroundColor:"blue"}}position='sticky'>
     <Toolbar>
     <SchoolIcon/>
    <Typography>Counseling System and Visitor Management System</Typography>
    <Tabs textColor='inherit' indicatorColor='primary'
       sx={{ml:"auto"}} value={value}
      onChange={(e,val)=>setValue(val)}>
      <Tab LinkComponent={NavLink} to='/Signup' label='signup'/>
      <Tab LinkComponent={NavLink} to='/Signin' label='signin'/>
      <Tab LinkComponent={NavLink} to='/Counsellor' label='Add Counsellor'/>
      <Tab LinkComponent={NavLink} to='/Visitor' label='Add Visitor'/>
      <Tab LinkComponent={NavLink} to='/Appointment' label='Appointment'/>
      <Tab LinkComponent={NavLink} to='/Hello' label='Hello'/>
      <Tab LinkComponent={NavLink} to='/fetch' label='FetchRegistrations'/>
    </Tabs>
    </Toolbar>
    </AppBar>
   
    </div>
  )
}

export default Header