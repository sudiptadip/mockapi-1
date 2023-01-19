const mongoose = require('mongoose')

const SignupSchema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, require: true},
})

const Signup = mongoose.model("signup_m", SignupSchema)


module.exports = {Signup}