const express=require('express');
const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema(
{
    name:{
        type:String
    },
    pass:{
        type:String,
        MinLength:3,
    },
    phon:{
        type:String,
        length:10
    },
    email:{
        type:String,
    }
}
)
userSchema.method("toJSON",function(){
    const{__v,_id,...object}=this.toObject();
    object.id=_id;
    return object;
});
const user=mongoose.model('User',userSchema);
user.createCollection().then(collection=>{
    console.log('collection user is created!!')
});
module.exports=user;


