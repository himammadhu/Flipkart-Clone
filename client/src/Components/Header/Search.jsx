import React from 'react';
import { InputBase } from '@mui/material';
import './header.scss';
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  return (
    <div>
        <div className="search">
        <InputBase className='inputbase' placeholder='Search for products,brands and more...'/>
        <SearchIcon className='searchicon'/>
        </div>
        
      
    </div>
  )
}

export default Search
