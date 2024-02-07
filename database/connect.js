const mongoose = require("mongoose");

const connectDb = (uri)=>{
    return mongoose.connect(uri).then(console.log("Connected to the database successfully"));
}


module.exports = connectDb;