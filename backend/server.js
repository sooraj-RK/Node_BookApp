
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import bookRouter from './routes/bookRoutes.js';



dotenv.config();
const app = express();
const port = process.env.PORT || 5000; 

const source = process.env.MONGODB_URI;

mongoose.connect(source, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>{
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
// app.get('/api/users',(req,res)=>{
//     res.json({message:"Get all users"});
// })

app.use('/users', userRouter);

app.use('/books',bookRouter)

app.listen(port,() =>{
    console.log(`server running on port ${port}`);
})
