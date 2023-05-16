import './Login.css';
import React, { useState,useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addNewUserToServer, login } from '../../users/UserSlice';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';

export default function Login() {
 let disp=useDispatch();
 let navigate=useNavigate();
 const inputName=useRef(null);
 const inputPass=useRef(null);
 const inputPhon=useRef(null);
 const inputMail=useRef(null);

const sentToUserSlice=()=>{
    disp(addNewUserToServer({name:inputName.current.value,pass:inputPass.current.value,phon:inputPhon.current.value,email:inputMail.current.value}))
    navigate('/Products')
}
  return (
  <>
    <div className="Login">  
      <Form className="form" >
         <div className="Auth-form-content">
         <Form.Group size="lg" controlId="userName" >       
           <Form.Label className='label'>Name</Form.Label>
           <Form.Control  placeholder="Enter your name" ref={inputName} autoFocus  type="name"  
        />
         </Form.Group>
        <Form.Group size="lg" controlId="password" >
           <Form.Label className='label'>Password</Form.Label>
           <Form.Control placeholder=" Enter your password" ref={inputPass}  type="password"  
         />
         </Form.Group>
        <Form.Group size="lg" controlId="userPhon" >       
           <Form.Label className='label'>Phone</Form.Label>
           <Form.Control  placeholder="Enter your phon" ref={inputPhon} autoFocus  type="phone"
        />
        </Form.Group>
          <Form.Group size="lg" controlId="userMail" >       
           <Form.Label className='label'>Mail</Form.Label>
           <Form.Control  placeholder="Enter your mail" ref={inputMail} autoFocus  type="email" 
        />
          </Form.Group>
            </div>
            <br/>
          <Button width="20" onClick={()=>{sentToUserSlice()}}>Register</Button>
      </Form>
    </div>
  </>
  );
}