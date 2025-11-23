import { Box } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'

const CalendarAdd = () => {
  return (
    <Box sx={{
        position: 'fixed',
        bottom: 0,
        right: 30,
        cursor: 'pointer',
        fontSize: 50,
    }}>
        <AddCircleIcon fontSize='inherit' color='info' />
    </Box>
  )
}

export default CalendarAdd