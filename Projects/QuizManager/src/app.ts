import express from 'express';
import mongoose from 'mongoose';
import UserRoute from './routes/user';

const app=express();

const connectionString="mongodb+srv://guptaaastha824:1234@cluster0.xdho994.mongodb.net/quizdb?retryWrites=true&w=majority";

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use('/user',UserRoute);

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


mongoose.connect(connectionString, mongooseOptions as mongoose.ConnectOptions)
    .then(() => {
        app.listen(3000, () => {
            console.log('Server Connected');
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

