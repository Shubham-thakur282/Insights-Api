require("dotenv").config();
const Express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = Express();
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT || 5000;
const router = require("./routes/routes");
const connectDb = require("./database/connect");
app.use(cors());


app.get("/",(req,res)=>{

    res.status(200).json({"name":"shubham"});
})

app.use("/api",router);

const start = async ()=>{
    try {
        const uri = process.env.MONGO_URI;
        await connectDb(uri);
        app.listen(port,(req,res)=>{
            console.log(`Sever running on port ${port}`);
        });
    } catch (error) {
        console.log(`server running on port ${port}`)
    }
}

start();