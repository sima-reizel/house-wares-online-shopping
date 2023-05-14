import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Bag from '../icons/Bag';
import { useSelector,useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { changeStatus } from '../../users/UserSlice';
import './NavBar.css';

const theme = createTheme({
palette: {
  bag: { 
    main: '#ffffff',
  },
  nav:{
    main: '#fafafa',
  },
  button1:{
  main:'#212121',
  },
  button2:{
  main:'#212121',
  }
  }
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
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
color: 'white',
'& .MuiInputBase-input': {
  padding: theme.spacing(1, 1, 1, 0),
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


export default function SearchAppBar() {
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
};
let u=useSelector(state=>state.users.user);
let disp=useDispatch();

const error=()=>{ 
if(u.userStatus=='trying')
  return (alert("please register"))
else
  return;
}

let navigate=useNavigate();
 const out=()=>{
  disp(changeStatus())
  navigate('./');

 }
useEffect(()=>{error()},[u.userStatus])
u=useSelector(state=>state.users.user);
return ( 
  <div >
    <ThemeProvider  theme={theme}   > 
      <Box  sx={{ flexBasis: 1 }} >
        <AppBar className='mi'  position="static" color='nav' >     
          <Toolbar  >       
            <IconButton
             size="large"
             edge="start"
             color="bag"       
             aria-label="open drawer"
             sx={{ mr: 2 }}
            >            
             <Bag  isnavBar="true"/>          
            </IconButton> 
            <h5>{u.name}</h5>
            {u.name!='Guest'&&
            <Stack paddingLeft={3} direction="row" spacing={2} >
             <Button color="bag"  style={{marginLeft:25,fontSize:20}}   onClick={()=>{out()}}>sign Up</Button>
            </Stack>   
            } 
            {u.name=='Guest'&&
            <Stack paddingLeft={3} width={250} direction="row" spacing={2}>
             <Button color="bag" style={{marginLeft:25,fontSize:20}}  onClick={()=>{navigate('./Login')}}>sign in</Button>
            </Stack>
            }
            <Stack direction="row" spacing={2} >
             <Button  color="bag"  style={{marginLeft:550,fontSize:20}}  onClick={()=>{navigate('./')}}>לדף הבית</Button>
            </Stack>    
            <Stack direction="row" spacing={2} className='but'>
             <Button  color="bag"  style={{marginLeft:25,fontSize:20}}  onClick={()=>{navigate('./Register')}}>להרשמה</Button>
            </Stack>  
            <Typography
            variant="h6"
            noWrap
            component="div"                      
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >          
            </Typography>                 
          </Toolbar>
        </AppBar>    
      </Box>
    </ThemeProvider>    
  </div>
);
}
 