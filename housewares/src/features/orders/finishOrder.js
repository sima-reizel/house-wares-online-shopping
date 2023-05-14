import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import TotalShow from './totalShow';
import { useNavigate } from 'react-router';

export function FinishOrder(){
 let navigate=useNavigate()
 let basket=useSelector(state=>state.order.basketArr)
 return(
  <>    
    <h3>סיכום הזמנה</h3>
    {basket.map(item=><TotalShow item={item}/>)}
    <Stack direction="column-reverse" >
      <Button onClick={()=>{navigate('./PayOrder')}}>לתשלום </Button>
    </Stack>  
  </> 
 )
}