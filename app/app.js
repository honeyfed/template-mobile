const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const history = require('connect-history-api-fallback')

const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(history())

app.use(express.static(path.join(__dirname, '../dist')))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  return res.sendFile(path.join(__dirname, '../dist/m/index.html'))
})

// error handler
app.use(function (err, req, res, next) {
  console.log('err: ', err)
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  return res.sendFile(path.join(__dirname, '../dist/m/index.html'))

  // render the error page
  // res.status(err.status || 500);
  // res.end('error');
})

module.exports = app
