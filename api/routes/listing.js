import express from 'express';
import mongoose from 'mongoose';
import listing from '../models/ListingModel.js';

const route = express.Router({ mergeParams: true });

const citiesDict = {

};

route.get('/', async (req, res) => {
    try {
        let city = req.params.cityName;
        var result = await listing(city).find().exec();
        res.json(result);

    } catch (err) {
        res.status(500).send(err);
    }
});

export {route as default};