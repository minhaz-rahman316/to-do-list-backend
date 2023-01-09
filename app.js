// Basics
const express = require('express');
const router               = require('./src/routes/api');
const app                  = new express();
const bodyParser = require('body-parser');

// security Middleware Import
const expressRateLimit     = require('express-rate-limit');
const helmet               = require('helmet');
const expressMongoSanitize = require('express-mongo-sanitize');
const xssClean             = require('xss-clean');
const hpp                  = require('hpp');
const cors                 = require('cors');



// Database library
const mongoose = require ('mongoose')




// security middleware use
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(expressMongoSanitize());
app.use(xssClean());


// Body-Parser use
app.use(bodyParser.json());


// request rate limiting
const limiter = expressRateLimit({
    windowMs: 1 * 60 * 1000,
    max:3000
});

app.use(limiter)

// Mongodb Connection
let URI = 'mongodb://127.0.0.1:27017/todo';
let OPTION = { user: '', pass: '', autoIndex:true};

mongoose.set('strictQuery', false)
mongoose.connect(URI, OPTION, (error) => {
    console.log("Database Connection Success");
    console.log(error);
})



app.use("/api/v1", router);

// undefined route
app.use('*', (req, res) => {
    res.status(404).json({ status:"failed",data:"Not found"})
})


module.exports = app;