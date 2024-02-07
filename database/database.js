require("dotenv").config({ path: "../.env" });
const connectDb = require("./connect");
const Product = require("../models/model");
const jsonData = require("../jsondata.json");
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const insertData = async () => {
    try {
        await connectDb(uri);
        await Product.deleteMany();
        await Product.create(jsonData);
        console.log("successfully inserted the data to the database");
    } catch (error) {
        console.log(error);
    }
}

insertData();
