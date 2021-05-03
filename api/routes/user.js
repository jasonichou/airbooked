import express from 'express';
import mongoose from 'mongoose';
import User from '../models/UserModel.js';

const route = express.Router();

route.post('/', async (req, res) => {
    console.log("sending post request");
    const { firstName, lastName } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

export {route as default};