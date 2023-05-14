import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  ProductShow  from "./ProductShow";
import {fetchAllProducts} from './ProductSlice';
import ProductDirect from "./productDirect";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function Products (){
    let disp=useDispatch();
    let status=useSelector(state=>state.product.IsSucsses);
    let u=useSelector(state=>state.users.user);
    let directPassword=useSelector(state=>state.users.direcPass);
    useEffect(
        ()=>{disp(fetchAllProducts())},[]
    )
   let prodArr=useSelector(state=>state.product.prodArr)
return(
<>    
  <Box sx={{ flexGrow:3}}>
    <Grid container spacing={5} paddingLeft={13}>
        {prodArr.map(item=><div key={item.id} >
        {u.pass==directPassword&&<ProductDirect status="product" prod={item}/>}
        {u.pass!=directPassword&&<ProductShow status="product" prod={item}/>}
        </div>)}   
    </Grid>
 </Box>
</>
)
}

