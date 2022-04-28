require ('dotenv').config();
const { urlencoded } = require('express');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const travelController = require('./controllers/travelController');

const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

const db = mongoose.connection;
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('Mongo connected: ', process.env.MONGO_URI));
db.on('disconnected', () => console.log('Mongo disconnected'));

app.use(morgan('short'));
app.use(cors());
app.use(urlencoded({extended: true}));
app.use(express.json());

app.use('/trips', travelController);

app.listen(PORT, () => {
  console.log("App is running");
})