const express=require('express');
const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const productSchema=new Schema(
{
    name:{
        type:String
    },
    price:{
        type:Number,       
    },
    imgUrl:{
        type:String,
    },
    id:{
        type:String,
        unique:true,
    }
}
)
productSchema.method("toJSON",function(){
    const{__v,_id,...object}=this.toObject();
    object.id=_id;
    return object;
});
const products=mongoose.model('products',productSchema);
products.createCollection().then(collection=>{
    console.log('collection products is created!!')
});
module.exports=products;


