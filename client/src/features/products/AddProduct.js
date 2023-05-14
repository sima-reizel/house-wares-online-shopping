import { addProduct } from './ProductSlice';
import React, {useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
let cnt = 0;
export const AddProduct = () => {
    let disp=useDispatch();
    let navigate=useNavigate();
    const inputName=useRef(null);
    const id=useRef(null);
    const img=useRef(null);
    const price=useRef(null);
    let succesProd=useSelector(state=>state.product.IsSucssesAdd);
    const sentToserver=()=>{
        disp(addProduct({name:inputName.current.value,id:id.current.value,imgUrl:img.current.value,price:price.current.value}))
        navigate('../Products');
    }
return (
  <>
    <h1>{succesProd.name}</h1>
    {succesProd.name=="not"&&<h1>addition didnt sucsses</h1>}
    {succesProd.name!=" "&&succesProd.name!="not"&& <h1>addition sucsses {succesProd.name}</h1>}
    <div className="Login">
      <Form className="form"  >
        <div className="Auth-form-content">
          <Form.Group size="lg" controlId="userName" >
            <Form.Label className='label'>name</Form.Label>
            <Form.Control placeholder="enter your name" ref={inputName} autoFocus type="name" />
          </Form.Group>
          <Form.Group size="lg" controlId="id" >
             <Form.Label className='label'>id</Form.Label>
             <Form.Control placeholder="id" ref={id} type="id" />
          </Form.Group>  
          <Form.Group size="lg" controlId="img" >
             <Form.Label className='label'>imgUrl</Form.Label>
             <Form.Control placeholder="imgUrl" ref={img} type="string"/>
          </Form.Group>
          <Form.Group size="lg" controlId="password" >
             <Form.Label className='label'>price</Form.Label>
             <Form.Control placeholder="price" ref={price} type="number"/>
          </Form.Group>        
        </div>  
          <br/>   
          <Button width="20" onClick={()=>{sentToserver()}}>add</Button>
      </Form>    
    </div>
  </>
);
}

