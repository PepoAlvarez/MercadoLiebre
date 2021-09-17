const express = require('express');
const app = express();
const port = 3000;
const path = require("path")


app.listen(process.env.PORT || 3000, function(){
    console.log('Funciona en el http://localhost:3000');
})


app.get('/',function(req,res){res.sendFile(path.join(__dirname,"/views/home.html"))})
app.get('/login',function(req,res){res.sendFile(path.join(__dirname,"/views/login.html"))})
app.get('/register',function(req,res){res.sendFile(path.join(__dirname,"/views/register.html"))})



app.use(express.static("public"))