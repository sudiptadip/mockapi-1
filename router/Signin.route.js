const bcrypt = require('bcrypt')
const {Router} = require("express")
var jwt = require('jsonwebtoken');
const { Signup } = require('../module/Signup.module');


const signinRouter = Router()


signinRouter.post('/',async(req,res)=>{
    const userData = req.body
    const {email,password} = req.body
    let data = await Signup.findOne({email: email})
    if(data){
    const hash = data.password
    bcrypt.compare(password, hash, function(err, result) {
        if(result){
            var token = jwt.sign({email: email,}, 'shhhhh');
            res.send({userData: userData, token: token})
        }else{
            res.send({msg: 'Invalid Credentials'})
        }
    });
}else{
    res.send({msg: 'Invalid Credentials'})
}
})




module.exports = {signinRouter}