require("dotenv").config({ path: "../.env" });
const Product = require("../models/model");

const uri = process.env.MONGO_URI;

const dashboard = async (req, res) => {

    // console.log(req.query);
    const { intensity, likelihood, relevance, "end year": end_year, endyear, Endyear, "start year": start_year, startyear, Startyear, country, topic, region, source, sector, pestle } = req.query;

    const queryObject = {};

    if (intensity) {
        queryObject.intensity = intensity;
    };

    if (likelihood) {
        queryObject.likelihood = likelihood;
    };

    if (relevance) {
        queryObject.relevance = relevance;
    };

    if (end_year) {
        queryObject.end_year = end_year;
    } else if (endyear) {
        queryObject.end_year = endyear;
    } else if (Endyear) {
        queryObject.end_year = Endyear;
    };

    if (start_year) {
        queryObject.start_year = start_year;
    } else if (startyear) {
        queryObject.end_year = startyear;
    } else if (Startyear) {
        queryObject.end_year = Startyear;
    };

    if (country) {
        queryObject.country = { $regex: country, $options: "i" };
    };

    if (topic) {
        queryObject.topic = { $regex: topic, $options: "i" };
    };

    if (region) {
        queryObject.region = { $regex: region, $options: "i" };
    };

    if (source) {
        queryObject.source = { $regex: source, $options: "i" };
    };
    if (sector) {
        queryObject.sector = { $regex: sector, $options: "i" };
    };
    if (pestle) {
        queryObject.pestle = { $regex: pestle, $options: "i" };
    };

    let response = Product.find(queryObject);
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 15;

    let skip = (page - 1) * limit;

    response = response.skip(skip).limit(limit);

    const result = await response;



    res.status(200).json(result);
}

module.exports = { dashboard };
