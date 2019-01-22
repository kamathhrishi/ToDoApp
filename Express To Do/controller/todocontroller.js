

var bodyparser=require('body-parser');

var data=[{item:'Hello '}, {item:'Walk a dog'}];
var urlencodedparser=bodyparser.urlencoded({extended:false});



module.exports=function(app){


app.get('/todo',function(req,res)
 {

     res.render('todo',{todos:data});


 }
);

app.post('/todo',urlencodedparser,function(req,res)
 {

     data.push(req.body.item);
     res.json(data);


 }
);

app.delete('/todo/:item',function(req,res)
 {

   data=data.filter(function(todo){

           return todo.item.replace(/ /g,'-')!==req.params.item;

   });


 }
);

}
