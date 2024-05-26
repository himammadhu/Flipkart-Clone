import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar,styled } from '@mui/material';
import logo from './logo.png';
import './header.scss'
import Search from './Search';
import CustomButtons from './CustomButtons';


const styledHeader = styled(AppBar)`
background: #2874f0;
height:55px;
`
const Header = () => {
  return (
    <div>
      <AppBar className='appbar'>
        <Toolbar>
            <div className='logo'>
                <img src={logo} alt="logo" />
                
            </div>
            <Search/>
            <CustomButtons/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
