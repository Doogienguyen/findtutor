const express       = require('express');
const teacherRoutes   = require('./routes/teacher');


const fs            = require('fs');
const path          = require('path');
const mongomorgan   = require('mongo-morgan')
const logger        = require('morgan');

const cors = require('cors')
const app = express();
const port = 5000;

// require .env and db.js

require('dotenv').load();
require('./config/db');


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});


// Logging
app.use(logger('dev')); //write to console
app.use(logger('combined', {stream: accessLogStream})); //writes to a file
app.use(mongomorgan(process.env.DB_URL, 'dev'));

// routes
app.use('/api/teachers', teacherRoutes);

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;