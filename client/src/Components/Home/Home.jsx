import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box } from '@mui/material'
import './Home.scss'

const Home = () => {
  return (
    <div>
            <Navbar/>
            <div className="component">
            <Box>
              <Banner/>              
            </Box>
            </div>
      
    </div>
  )
}

export default Home
