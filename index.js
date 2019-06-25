const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();
//connect to DB
mongoose.connect(process.env.DB__CONNECT ,
{ useNewUrlParser: true } ,
 () => {
    console.log('connected to db');
})
//middleware
app.use(express.json());

//Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(4000, () => console.log('server is running........'))   ;