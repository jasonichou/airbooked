import dotenv from 'dotenv-safe';
import mongoose from 'mongoose';

dotenv.config();

const dbParams = {
    URI: process.env.URI
}

let db;

export const connectDB = async () => {
    db = await mongoose.connect(dbParams.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Database connected.');
}

export {db};