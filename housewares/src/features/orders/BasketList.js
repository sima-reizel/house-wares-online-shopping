import  ProductShow  from "../products/ProductShow";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router";

 export  function BasketList(){
  let navigate=useNavigate();
  let disp=useDispatch();
  let basketArr=useSelector(state=>state.order.basketArr);
return(
  <>
   <h1> My basket </h1>
   <br/>
   <br/>
   {basketArr&&
    <Box sx={{ flexGrow:3}}>
     <Grid container spacing={5} paddingLeft={13}>
       {basketArr.map(item=><div key={item.id} >    
       <ProductShow  status="basket" prod={item}/></div>)} 
     </Grid>
     <br/>
    </Box>
   }
 </>
)
}