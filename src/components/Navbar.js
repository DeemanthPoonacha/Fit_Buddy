import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = ({page}) => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '10px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: { sm: '48px', xs: '10px' }, height: { sm: '48px', xs: '10px' }, margin: { sm: '20px 20px', xs: '0px' } }} />
    </Link>
    <Stack
      direction="row"
      gap={{ sm: '48px', xs: '10px' }}
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: (page === 'home') ? '3px solid #FF2625' : '' }}>Home</Link>
      <a href="/#exercises" style={{ textDecoration: 'none', color: '#3A1212' , borderBottom: (page === 'detail') ? '3px solid #FF2625' : ''}}>Exercises</a>
      <Link to="/bmi" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: (page === 'bmi') ? '3px solid #FF2625' : '' }}>BMI Calculator</Link>
    </Stack>
  </Stack>
);

export default Navbar;
