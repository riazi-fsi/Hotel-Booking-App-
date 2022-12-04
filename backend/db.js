const mongoose = require('mongoose');

var mongoUrl = 'mongodb://localhost:27017/hotel';

mongoose.connect(mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

var connection=mongoose.connection
connection.on('error',()=>{
    console.log("MongoDB Connection faild")
})
connection.on('connected',()=>{
    console.log("MongoDB Connection  successful")
})

module.exports=mongoose