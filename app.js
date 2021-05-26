import dotenv from 'dotenv-safe';
import express from 'express';
import cors from 'cors';
import { connectDB } from './db/connection.js';
import router from './api/routes/router.js';
import userModel from './api/routes/user.js';
import listingModel from './api/routes/listing.js';


dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({origin: 'http://localhost:8080'}));

// // Add headers
// app.use(function (req, res, next) {
    
//         // Website you wish to allow to connect
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    
//         // Request methods you wish to allow
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
//         // Request headers you wish to allow
//         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
//         // Set to true if you need the website to include cookies in the requests sent
//         // to the API (e.g. in case you use sessions)
//         res.setHeader('Access-Control-Allow-Credentials', true);
    
//         // Pass to next layer of middleware
//         next();
//     });

app.use('/', router);
app.use(express.json({ extended:false }));
app.use('/api/user', userModel);
app.use('/api/san_francisco', listingModel);

app.listen(port, () => console.log('Server listening at port 3000.'));



