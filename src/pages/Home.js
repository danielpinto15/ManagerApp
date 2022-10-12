import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Grid, Card } from '@material-ui/core';
import ClientsCard from '../components/ClientsCard'
import { Container } from '@mui/system';
import Masonry from 'react-masonry-css';

const clients = [
  {
    "name": "Jesualdo Narciso",
    "address": "Rua de cima",
    "date": "22-09-2022 13h15",
    "ua": "123456",
    "manager": "Cláudia",
    "id": 1
  },
  {
    "name": "Jesualdo Narciso",
    "address": "Rua de cima",
    "date": "22-09-2022 13h15",
    "ua": "123456",
    "manager": "Mainara",
    "id": 2
  },
  {
    "name": "Jesualdo Narciso",
    "address": "Rua de cima",
    "date": "22-09-2022 13h15",
    "ua": "123456",
    "manager": "Joana",
    "id": 3
  },
  {
    "name": "Jesualdo Narciso",
    "address": "Rua de cima",
    "date": "22-09-2022 13h15",
    "ua": "123456",
    "manager": "Fábio",
    "id": 4
  },
]


export default function Home() {
  //const [clients, setClient] = useState([]);

  useEffect( async () => {
    //setClient();
  }, [])
  
  const handleDelete = async (id) => {
    //setClient();
  } 

  const breakpoints = {
    default: 4,
    1100: 2,
    700: 1
  }

  return (
    <Container>
     <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
      {clients && clients.map(client => (
        <Box mt={2} key={client.id}>
          <ClientsCard client={client} handleDelete={handleDelete}/>
        </Box>
      ))}
     </Masonry>
    </Container>
    
  )
}
