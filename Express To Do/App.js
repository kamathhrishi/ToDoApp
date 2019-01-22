var express=require('express');

var todoController=require('./controller/todocontroller.js');

var app=express();

todoController(app);

app.set('view engine','ejs');
app.use(express.static('./public'));


app.listen(3000);
