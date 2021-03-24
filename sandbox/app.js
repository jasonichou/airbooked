import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



// mongo "mongodb+srv://cluster0.y7c4p.mongodb.net/myFirstDatabase" --username dbAdmin

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})


