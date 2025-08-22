import express from 'express';
import  mongoose  from 'mongoose';
import dotenv from 'dotenv';

import cors from 'cors';
import authRouter from './routes/auth.route.js';
import healthdashboardRouter from './routes/healthdashboard.route.js';

import cookieParser from 'cookie-parser';
dotenv.config();


const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("Server is running in the port 3000")
})




app.use('/api/auth',authRouter);
app.use('/api/healthdashboard', healthdashboardRouter);


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internet Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});