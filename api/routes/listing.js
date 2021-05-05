import express from 'express';
import mongoose from 'mongoose';
import Listing from '../models/ListingModel.js';

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        
        var result = await Listing.find().exec();
        res.json(result);

    } catch (err) {
        res.status(500).send(err);
    }
});

export {route as default};