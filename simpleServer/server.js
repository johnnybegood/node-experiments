// <reference path="./nodelib/node.js"/>

var express = require('express')
  , http = require('http')
  , path = require('path')
  , less = require('less')
  , hulk = require('hulk-hogan')
  , mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', hulk.__express);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public'}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
require('./controllers')(app);
require('./controllers/devices')(app);
require('./controllers/deviceTypes')(app);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
