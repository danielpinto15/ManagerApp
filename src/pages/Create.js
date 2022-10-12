import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import MaterialUIPickers from './DatePicker';
import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const categories = [
  { value: 'fabio', label: 'Fábio', },
  { value: 'claudia', label: 'Cláudia' },
  { value: 'joana', label: 'Joana' },
  { value: 'mainara', label: 'Mai' },
]

export default function Create() {
  const [details, setDetails] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [ua, setUa] = useState('');
  const [GnName, setGnName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name == '') {
      setNameError('')
    }

    if (details == ''){
      setUa('')
    }

    console.log(name, details, GnName, address, selectedDate)
  }

  return (
    <Container>
      <Box sx={{m: 2}}>
        <Typography 
          variant='h6'
          component='h2'
          color='textSecondary'
          align='center'
          gutterBottom
        >
          Add Client
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete='off'>
          <Box sx={{ mb: 1}}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              label='Nome'
              variant='outlined'
              color='primary'
              fullWidth
              required
            />
          </Box>
          <Box sx={{ mb: 1}}>
            <TextField
              onChange={(e) => setDetails(e.target.value)}
              label='UA'
              variant='outlined'
              color='primary'
              fullWidth
              required
            />       
          </Box>
          <Box sx={{ mb: 1}}>
            <TextField
              onChange={(e) => setGnName(e.target.value)}
              label='GN'
              select
              variant='outlined'
              color='primary'
              fullWidth
              required
              value={GnName}
            >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>    
          </Box>
          <Box sx={{ mb: 1}}>
              <MaterialUIPickers />
          </Box>
          <Box sx={{ mb: 1}}>
            <TextField
              onChange={(e) => setAddress(e.target.value)}
              label='Valor'
              variant='outlined'
              color='primary'
              fullWidth
              required
            />       
          </Box>
          <Button
            type='submit'
            startIcon={<SaveIcon />}
            color='primary'
            variant='contained'
          >Submit</Button>
        </form>
      </Box>
    </Container>
  )
}
