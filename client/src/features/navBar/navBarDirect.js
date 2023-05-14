import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { changeStatus } from '../../users/UserSlice';

const theme = createTheme({
  palette: {
    bag: { 
      main: '#212121',
    },
    nav:{
      main: '#fafafa',
    },
    button1:{
    main: '#11cb5f',
    },
    button2:{
    main:'#f48fb1',
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

export default function NavBarDirect() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  let disp=useDispatch()
  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate=useNavigate();
  const out=()=>{
    disp(changeStatus())
    navigate('Products'); 
   }
return (
  <>
    <ThemeProvider theme={theme}> 
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='nav'>     
          <Toolbar>       
            <Stack direction="row" spacing={2}>
              <Button style={{marginLeft:50,fontSize:15}} onClick={()=>{navigate('./AddProduct')}}>להוספת מוצר</Button>
            </Stack>  
            <Stack direction="row" spacing={2}>
              <Button style={{marginLeft:50,fontSize:15}} onClick={()=>{navigate('./remove')}}>למחיקת מוצר</Button>
            </Stack>  
            <Stack direction="row" spacing={2}>
              <Button style={{marginLeft:750,fontSize:15}} onClick={()=>{out()}}>sign up </Button>
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
  </>
 );
}
   