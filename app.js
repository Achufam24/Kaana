//require dotenv
require('dotenv').config()

const express = require('express');
const orderRoutes = require('./routes/order');
const authRoutes = require('./routes/auth');

const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req,res,next) =>{
    console.log(req.path,req.method);
    next();
})

//routes
app.use('/kaana/auth/',authRoutes);
app.use('/kaana/order/', orderRoutes);


//connect to db

mongoose.connect(process.env.MONGO_URI).then(() => {
    //listens for requests
    app.listen(PORT, () => {
        console.log('connected to db and listening at port',PORT);
    })
}).catch((error) => {
    console.log(error);
})
