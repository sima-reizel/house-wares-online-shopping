const express = require('express');
const user = require('./router/user')
const product = require('./router/product')
const app = express();
const mongoose = require("mongoose");
const db=require('./model');
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs');

const options={
    autoIndex:false,
    maxPoolSize:10,
    family:4,
    useNewUrlParser:true,
    useUnifiedTopology:true
}
db.mongoose.connect(db.url,options)
.then(ret=>{
    console.log("connect Db"+ret)
})
.catch(ex=>{
    console.log(ex)
    process.exit();
});
app.use(cors())
app.listen(4000, () => {
console.log("listen port 4000")
});
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use((req, res, next) => {
    let text = new Date().toGMTString() + "  : " + req.url + '\n';
    fs.appendFile("log.txt", text, () => {
        next();
    })
})
app.get('/', (req, res) => {
    res.send("api running");
})
app.use("/product", product);
app.use("/user", user);
