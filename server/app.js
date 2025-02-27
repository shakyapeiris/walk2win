const express = require('express');
const leaderBoardRouter = require('./routes/leaderBoardRouter');
const syncRouter = require('./routes/syncRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expresValidator = require('express-validator');
const cors = require('cors');
const mockgoose = require('mockgoose');
const db = require('./helpers/db');

if (process.env.NODE_ENV != 'test') db.connect();
const app = express();

app.use(express.static('../client/dist/walk2win'));
app.use(bodyParser.json());

app.use(cors());
app.use(expresValidator());
app.use(leaderBoardRouter);
app.use(syncRouter);

module.exports = app;
