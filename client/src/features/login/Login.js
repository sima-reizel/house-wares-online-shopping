import './Login.css';
import React, { useState, useRef ,useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../users/UserSlice';
import { useNavigate } from 'react-router';

export default function Login(){
  const inputName = useRef(null);
  const inputPass = useRef(null);
  const [formWasSubmited,setFormWasSubmited] = useState(false);
  let navigate=useNavigate()
  let disp = useDispatch();
 
  let directPass=useSelector(state=>state.users.direcPass);
  
  function HandleSubmit(event) {
    setFormWasSubmited(true);
    disp(loginUser({name:inputName.current.value,pass:inputPass.current.value}))
  }

  let u=useSelector(state=>state.users.user);

  async function sentToUserSlice(){
  disp(loginUser({name:inputName.current.value,pass:inputPass.current.value}))  
    u.name=='Guest'&&navigate('./Products')
  }
 
  u=useSelector(state=>state.users.user);
  let directPassword=useSelector(state=>state.users.direcPass);

  const error=()=>{ 
  return (alert("Please register"))
  }

  return (
  <>
    <div className="Login">
      <Form className="form" onSubmit={HandleSubmit} >
        <div className="Auth-form-content">
          <Form.Group size="lg" controlId="userName" >
            <Form.Label className='label'>Name</Form.Label>
             <Form.Control placeholder="Enter your name" ref={inputName} autoFocus type="name" />
          </Form.Group>
          <Form.Group size="lg" controlId="password" >
            <Form.Label className='label'>Password</Form.Label>
             <Form.Control placeholder="Enter your password" ref={inputPass} type="password" />
          </Form.Group>
        </div>  
         <br/>     
         <Button width="20" onClick={()=>{sentToUserSlice()}}>Login</Button>
      </Form> 
    </div> 
  </>
 );
}
