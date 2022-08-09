import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar page={page}/>
      <Routes>
        <Route path="/" element={<Home setPage={setPage}/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail setPage={setPage}/>} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
