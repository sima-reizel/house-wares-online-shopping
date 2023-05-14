import { useState } from "react";
import { useDispatch,useSelector } from "react-redux"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteProduct } from './ProductSlice';

export default function ProductDirect ({prod,status}){  
  let help=useSelector(state=>state.product.showSmallBasket);
  let [showSmallBasket,setshowSmallBasket]=useState(help);
  let navigate=useNavigate();
  let u=useSelector(state=>state.users.user);
  let disp=useDispatch();
  let number =1;
  const removeFromServer=()=>{
    disp(deleteProduct({code:prod.code}))
    navigate('../try')
  } 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width:'200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
  <>    
    <Grid xs={10} md={10}>
      {status=="product" &&     
        <Item > 
          <label>{prod.name}</label>
          <img height="180px"
                width="180px"
          src={prod.imgUrl} />        
          <br/>          
          <br/>
          <h3>${prod.price}</h3>
          <input  placeholder="amount" onChange={(e)=>{number=e.target.value}} />
          <div>
            <IconButton onClick={()=>{ removeFromServer()}}> 
               < DeleteForeverIcon /> 
            </IconButton>      
          </div>     
        </Item>        
      } 
    </Grid> 
  </>
  );
}

