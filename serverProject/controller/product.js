const express=require('express');
const bodyParser=require('body-parser');
const product=require('../model/products.model');
const fs = require('fs');
const { create } = require('domain');
async function get(req, res) {
    let data=await product.find({});
    res.send(data);
}
async  function getById (req, res) {
    console.log("get by id")
    let idUser = req.body.code;
    let delProduct = await product.findOneAndDelete({code:idUser})
    if(delProduct){
    console.log("deleted")
    res.send(delProduct);
    }
    else{
    console.log(idUser)
    res.status(500).send({name:"not"})
    }
}
async function post  (req, res)  {
    let result=await product.create(req.body);
    if(result){
    console.log("add prod")
    res.send(req.body);
    
    }
    else{
    console.log("add prod")
    res.status(500).send({name:"not"});
    }
}
exports.get = get;
exports.post=post;
exports.getById=getById;

