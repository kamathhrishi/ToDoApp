
const express=require('express');
const mongoose=require('mongoose');

app=express();

mongoose.connect('mongodb://localhost:27017/local', {useNewUrlParser: true});

var genres=require('./models/Genre');

app.get('/',function(req,res){


      res.send("Hello World");

      genres.GetGenres(function(err,genre)
      {


           console.log(genre);


      });


});

app.get('/Add',function(req,res){


      genres.AddGenre({name:"Hello World"},function(err,genre)
      {


           console.log("ADded book");


      });


});

app.listen(3000);
