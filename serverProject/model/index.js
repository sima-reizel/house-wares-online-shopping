const bodyParser = require('body-parser');
const mongoose =require('mongoose');
let url="mongodb://localhost:27017/houseWares";
mongoose.Promise=global.Promise;
const db={
}
db.mongoose=mongoose;
db.url=url;
db.user=require('./user.model');
db.product=require('./products.model');
module.exports =db;