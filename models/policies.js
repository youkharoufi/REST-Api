const mongoose=require('mongoose');


const Schema=mongoose.Schema;

var policySchema=new Schema({
    id:String,
    amountInsured:String,
    email:String,
    inceptionDate:String,
    installmentPayment:Boolean
})

module.exports=mongoose.model('Policy',policySchema);