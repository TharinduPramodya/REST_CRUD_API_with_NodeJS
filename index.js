const express = require('express');
const connection = require("./connection");
const marksRoute = require('./routes/marks');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/marks',marksRoute);

module.exports = app;
