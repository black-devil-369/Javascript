import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
mongoose
   .connect(process.env.MONGO)
   .then(() =>{
    console.log("MongoDb is connected");
   })
   .catch((err) => {
    console.log(err);r
   });
const app = express();
app.listen(port,()=>{
    console.log(`server is running on PORT ${port}`);
})