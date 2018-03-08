const express = require('express'),
  app = express(),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser');

port = process.env.PORT || 3050;
url = process.env.IP || '0.0.0.0';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());

/*for controllers folder*/
app.use(require('./route/index'));

app.get('/', function(req, res) {
  res.send(`api service running on ${url}:${port}`);
});

/*catch 404 and forward to error handler*/
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Webhooks service running on localhost:${port}`);
});

console.log('RESTful API server started on: ' + port);
