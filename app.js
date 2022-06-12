const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const inventoryRouter = require('./Routes/inventoryRoutes');
const usersRouter = require('./Routes/userRoutes');

const app = express();

const dbURI = 'mongodb+srv://Sk-patro:Violet%400240@sivacluster.lmzwugn.mongodb.net/inventoryManager'
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/inventory', inventoryRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

mongoose.connect(dbURI).then(() => {
  app.listen(process.env.API_URL || 3000, () => {
    console.log('listening to port', process.env.API_URL || 3000)
  })
}).catch(err => {
  console.error(err.message)
})

module.exports = app;
