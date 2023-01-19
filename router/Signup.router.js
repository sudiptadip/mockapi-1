const {Router} = require("express")
const bcrypt = require("bcrypt")
const { Signup } = require("../module/Signup.module")


const signupRouter = Router()


signupRouter.post('/',async(req,res)=>{
    let {email,password} = req.body
    bcrypt.hash(password, 3, async function (err, hash) {
         let data = await Signup.insertMany({email: email, password: hash})
         res.send({msg: "sucessfully created account", data: data})
    });
})


module.exports = {signupRouter}