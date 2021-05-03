import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String
});

const User = mongoose.model('User', userSchema); 

export {User as default};