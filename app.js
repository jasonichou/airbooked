import dotenv from 'dotenv-safe';
import express from 'express';
import cors from 'cors';
import { connectDB } from './db/connection.js';
import router from './api/routes/router.js'
import userModel from './api/routes/user.js'


dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use('/', router);
app.use(express.json({ extended:false }));
app.use('/api/user', userModel);
app.listen(port, () => console.log('Server listening at port 3000.'));



