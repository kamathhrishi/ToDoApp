
const mongoose=require('mongoose');


var GenreSchema=mongoose.Schema({

   name:String

});

var Genre=module.exports.Genre=mongoose.model('genres',GenreSchema);

module.exports.GetGenres=function(callback){

       Genre.find(callback);

}

module.exports.AddGenre=function(genre,callback){


       Genre.create(genre,callback);


}
