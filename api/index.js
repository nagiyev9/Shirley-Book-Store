// Path
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

// App
const app = express();

// Imports 
const { connect } = require('./database/db');

// Routes' Path
const MainRouter = require('./routes');

// Dotenv Config
dotenv.config();

// Middlewares 
app.use(express.urlencoded({ extended: true }));
app.use('/api/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(logger('dev'));

// PORT 
const PORT = process.env.PORT;

// Route
app.use('/api', MainRouter);

// Listen 
app.listen(PORT, () => {
    connect();
    console.log(`Server is working on ${PORT} port`);
});