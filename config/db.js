const mongoose = require('mongoose')

const url = `mongodb+srv://sudiptadip:sudipta12dip@cluster0.cjh7zwa.mongodb.net/?retryWrites=true&w=majority`

const connection = mongoose.connect(url)

module.exports = {connection}