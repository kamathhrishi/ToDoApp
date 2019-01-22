const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const app=express();


app.use('/api',require('./routes/api'));


mongoose.connect('mongodb://localhost:27017/ninja',{useNewUrlParser: true});
mongoose.Promise=global.Promise;

app.use(bodyParser.json());

app.get('/api',function(req,res){


   console.log("GET REQUEST");
   res.end();

});


app.listen(process.env.port||4000,function(req,res){


        console.log("Now listening for requests");


});
