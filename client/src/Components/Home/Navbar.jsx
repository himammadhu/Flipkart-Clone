
import React from 'react';
import { Box, Typography } from '@mui/material';
import { navData } from '../../Constants/data';
import './Home.scss';

const Navbar = () => {
  return (
    <Box className="navbar">
      {navData.map((data, index) => (
        <Box key={index} className="nav-item">
          <img src={data.url} alt={data.text} className="nav-image" />
          <Typography variant="body2" className="nav-text">{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;

