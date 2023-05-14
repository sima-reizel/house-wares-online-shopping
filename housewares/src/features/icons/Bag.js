import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BasketList } from '../orders/BasketList';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({ 
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '10 4px',
  },
}));

export default function Bag({isnavBar}) {
  let navigate=useNavigate();
  const [state, setState] = React.useState({
    left: false,  
});

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
    <Box>
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
     <BasketList/>
    </Box>
    <Box
       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
       role="presentation"
       onClick={toggleDrawer(anchor, false)}
       onKeyDown={toggleDrawer(anchor, false)}
     >
     <Stack direction="column-reverse" >
     <Button onClick={()=>{navigate('./FinishOrder')}}>להמשך ההזמנה</Button>
    </Stack>  
     </Box>     
     </Box>
     );
     let u=useSelector(state=>state.users.user);
return (    
  <div >
        {['add'].map((anchor) => (
        <React.Fragment key={anchor}>
          {u.name!='Guest'}
          {
          <Button style={{width:2, marginLeft:1} } onClick={toggleDrawer(anchor, true)}></Button>
          }
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
          {list(anchor)}
          </Drawer>
          </React.Fragment>      
        ))}  
          
         {isnavBar=='true'&&
        <ShoppingCartIcon />
         }     
  </div>
  ); 
}

 



