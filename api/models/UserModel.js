import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let user = new Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    }
});

const User = mongoose.model('User', user); 

export {User as default};