import { Button, TableRow, Typography } from '@mui/material'
import React from 'react'
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const CustomButtons = () => {
  return (
    <div>
      <div className="login">
        <Button varient="contained" className='btn'> Login</Button>
        <Typography className='text'>Become a Seller</Typography>
        <Typography className='text'>More</Typography>

        <TableRow className='cart'>
            <Typography className='text'><ShoppingCart/>Cart</Typography>

        </TableRow>
      </div>
    </div>
  )
}

export default CustomButtons
