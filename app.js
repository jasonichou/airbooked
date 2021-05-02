import express from 'express';
import cors from 'cors';
import { connectDB } from './db/connection.js';


connectDB();
const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => console.log('Server started.'));



