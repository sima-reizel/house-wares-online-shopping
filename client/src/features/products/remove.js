import { deleteProduct } from './ProductSlice';
import React, { useState,useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function Remove ()  {
    let disp=useDispatch();
    let navigate=useNavigate();
    const id=useRef(null);
    let succesProd=useSelector(state=>state.product.IsSucssesRemove);
    const removeFromServer=()=>{
        disp(deleteProduct({id:id.current.value}))
        navigate('../Products')  
    }
    return (
      <>
        <h1>{succesProd.name}</h1>
        {succesProd.name=="not"&&<h1>remove didnt sucsses</h1>}
        {succesProd.name!=" "&&succesProd.name!="not"&& <h1>remove sucsses {succesProd.name}</h1>}
        <div className="Login">
          <Form className="form"  >
            <div className="Auth-form-content">
              <Form.Group size="lg" controlId="id" >
                <Form.Label className='label'>id</Form.Label>
              <Form.Control placeholder="id" ref={id} type="id" />
              </Form.Group>  
            </div>  
            <br/>   
            <Button width="20" onClick={()=>{removeFromServer()}}>remove</Button>
          </Form> 
        </div>
      </>
    );
}

