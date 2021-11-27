const mongoose=require('mongoose');


const Schema=mongoose.Schema;

var clientSchema=new Schema({
    client_id:String,
    client_secret:String,
    admin:Boolean
})

module.exports=mongoose.model('Client',clientSchema);