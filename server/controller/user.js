const express=require('express');
const bodyParser=require('body-parser');
const user=require('../model/user.model');
const fs = require('fs');
 async function getById (req, res)  {
    let passw = req.params.pass;
    let data=await user.find({pass:passw})
    if(data.length!=0)
      res.send(user);
    else
      res.status(500).send("not found user by pass " + pass);
}
async function addnewUser(req, res)  {
    let result=await user.create(req.body);
    if(result){
    res.send(req.body);
    console.log("register suc")
    }
    else{
    res.status(500).send("error in add user");
    console.log("register notsuc")
    }
}

async function login (req, res) {
  let data=await user.find({name:req.body.name,pass:req.body.pass});
  if(data!=0){
      res.send(req.body);
      console.log("enter to login if")
  }
  else{
    res.status(400).send({name:"Guest", userStatus:"trying"})
      console.log("enter to login else")
  }
}
exports.login = login;
exports.addnewUser = addnewUser;
exports.getById = getById;

