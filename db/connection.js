import dotenv from 'dotenv-safe';
import mongoose from 'mongoose';

dotenv.config();

const dbParams = {
    URI: process.env.URI
}

export const connectDB = async () => {
    await mongoose.connect(dbParams.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Database connected.');
}