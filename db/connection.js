import mongoose from 'mongoose';


const URI = 'mongodb+srv://appUser:appUser@cluster0.y7c4p.mongodb.net/testDB?retryWrites=true&w=majority';
export const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Database connected.');
}

