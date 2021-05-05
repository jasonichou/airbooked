import express from 'express';
import mongoose from 'mongoose';
import User from '../models/UserModel.js';

import {db} from '../../db/connection.js';

const route = express.Router();

route.post('/', async (req, res) => {
    const { firstName, lastName } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

route.get('/', async (req, res) => {
    try {

        var result = await User.find().exec();
        res.json(result);

    } catch (err) {
        res.status(500).send(err);
    }
});

export {route as default};