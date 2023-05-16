import { useState } from "react";
import { useDispatch,useSelector } from "react-redux"
import { addOrder, editOrder,removeOrder } from "../orders/OrderSlice";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import Bag from '../icons/Bag';

export default function ProductShow ({prod,status}){  
  let help=useSelector(state=>state.product.showSmallBasket);
  let [showSmallBasket,setshowSmallBasket]=useState(help);
  let navigate=useNavigate();
  let u=useSelector(state=>state.users.user);
  let disp=useDispatch();
  let number =1;
  let  checking=()=>{
  if(prod.qty-1!=0) 
     disp(editOrder({...prod,math:'-'}))
  else
     disp(removeOrder({...prod.id}))
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width:'200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
return (<>    
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
            <input  placeholder="Amount" onChange={(e)=>{number=e.target.value}} />
            { u.name!="Guest"&&   
            <div>
              <IconButton style={{width:150 ,textAlign:'center'}} onClick={()=>{disp(addOrder({...prod,qty:number}))
               setshowSmallBasket(true)
               setTimeout(()=>{setshowSmallBasket(false)},3000);
              }}>   
                <Bag isnavBar="false"/>
                < AddShoppingCartIcon />        
              </IconButton> 
            </div>       
            }
            {u.name=="Guest"&&
            <IconButton disabled="disabled" onClick={()=>{disp(addOrder({...prod,qty:number}))}}>        
               < AddShoppingCartIcon /> 
            </IconButton>
            } 
          </Item>        
        } 
    </Grid>
    <Grid xs={30} md={30}>
      {status=="basket" &&   
      <> 
        <Item>
          <label>{prod.name}</label>
            <br/>
            <img height="70px"
                width="70px"
            src={prod.imgUrl} /> 
            <br/>
          <label>Amount :{prod.qty}</label>
          <br/>
          <label>${prod.price}</label>
          <br />
          <input type="button" value="remove" onClick={()=>{disp(removeOrder({...prod}))}}></input>
          <input type="button" value={"+"} onClick={()=>{disp(editOrder({...prod,math:'+'}))}}/>
          <input type="button" value={"-"} onClick={()=>{checking()}}/>
        </Item>      
        <br/>
      </>
      }   
    </Grid> 
</>);
}

