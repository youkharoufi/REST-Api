const jwt=require("jsonwebtoken");
const Client =require("../models/client");


module.exports={
    login:(req,res)=>{

        Client.findOne({client_id:req.body.username},(err,client)=>{
            if(err){
                return res.status(401).json({
                    status:401,
                    message:"Unauthorized Error"
                })
            }

            if(!client){
                return res.status(400).json({
                    status:400,
                    message:"no user found"
                })
            }
        })

        bcrypt.compare(process.env.SECRET,req.body.password,(err,verif)=>{
            if(err){
                return res.status(401).json({
                    status:401,
                    message:"Unauthorized Error"
                })
            }
            if(!verif){
                return res.status(400).json({
                    status:401,
                    message:"Unvalid Password"
                })
            }
        })
           
            return res.status(200).json({
                token:jwt.sign
                    ({jwtUser},
                    process.env.TOKEN,
                    {expiresIn:'0.5h'}),
                
            })
        }
    
}
