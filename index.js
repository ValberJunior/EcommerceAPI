const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')

dotenv.config();

mongoose.connect(process.env.MONGO_ATLAS_URL)
.then(()=> console.log('DB Connect Successfull!!'))
.catch(err=>console.log(err.message));

app.use(express.json());
app.use('/api/user', userRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!")
})