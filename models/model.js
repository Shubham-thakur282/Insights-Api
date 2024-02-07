const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const schema = mongoose.Schema({
    end_year:{
        type:Number,
    },
    intensity:{
        type :Number,
    },
    sector:{
        type:String,
    },
    topic:{
        type:String,
    },
    insight:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    region:{
        type:String,
    },
    start_year:{
        type:Number,
    },
    impact:{
        type:Number,
    },
    added:{
        type:String,
        required:true,
    },
    published:{
        type:String,
    },
    country:{
        type:String,
    },
    relevance:{
        type:Number,
    },
    pestle:{
        type:String,
    },
    source:{
        type:String,
    },
    title:{
        type:String,
        required:true,
    },
    likelihood:{
        type:Number,
        requiredL:true,
    }

})


module.exports = mongoose.model("Product",schema);