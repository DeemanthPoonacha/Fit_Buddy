import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo-full.png';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Box mt="auto" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" p="24px">
      <img style={{cursor:"pointer"}} onClick={()=>{
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }} src={Logo} alt="logo"  />
    </Stack>
  </Box>
);

export default Footer;
