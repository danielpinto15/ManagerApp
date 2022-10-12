import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const menuItens = [
  {
    text: 'Home',
    icon: <HomeIcon />,
    path: '/'
  },
  {
    text: 'Create',
    icon: 'C',
    path: '/create'
  },
  {
    text: 'Team',
    icon: 'T',
    path: '/team'
  }
];

export default function SearchAppBar() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    left: false
  });
  const [logedin, setLogedin] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };

  const list = (side) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {menuItens.map((item) => (
          <ListItem 
            key={item.text}
            button
            onClick={() => navigate(item.path)}
            >
            <ListItem>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </Box>
  );  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box marginRight='auto'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon/>
            </IconButton>
            <Drawer
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)} 
            >
            {list('left')}
            </Drawer>
          </Box>
          <Box sx={{mr:1}}>
          <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1}}
            >
              Hello Leader!
            </Typography>
          </Box>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

