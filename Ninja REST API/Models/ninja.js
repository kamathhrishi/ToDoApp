const mongoose=require('mongoose');

const Schema=mongoose.Schema;

NinjaSchema=Schema({

        name:{

           type: String,
           required:[true,'Name field is requires']

        },
        rank:{


           type:String


        },
        availabile:{


           type:Boolean,
           default:false

        }


});


const Ninja=mongoose.model('ninja',NinjaSchema);

module.exports=Ninja;
