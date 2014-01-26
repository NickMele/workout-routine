
/**
 * Module dependencies.
 */

var express = require('express'),
	workouts = require('./routes/workouts'),
	routines = require('./routes/routines'),
	plans = require('./routes/plans'),
	weekdays = require('./routes/weekdays'),
	logs = require('./routes/logs'),
	entries = require('./routes/entries'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/workout-routine');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Allow cross origin requests
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PUT");
	next();
});

// Routing
app.get('/workouts', workouts.index);
app.get('/workouts/:id', workouts.findById);
app.post('/workouts', workouts.add);
app.put('/workouts/:id', workouts.update);
app.delete('/workouts/:id', workouts.delete);

app.get('/routines', routines.index);
app.get('/routines/:id', routines.findById);
app.post('/routines', routines.add);
app.put('/routines/:id', routines.update);
app.delete('/routines/:id', routines.delete);

app.get('/plans', plans.index);
app.get('/plans/:id', plans.findById);
app.post('/plans', plans.add);
app.put('/plans/:id', plans.update);
app.delete('/plans/:id', plans.delete);

app.get('/weekdays', weekdays.index);
app.get('/weekdays/:id', weekdays.findById);
// app.post('/weekdays', weekdays.add);
// app.put('/weekdays/:id', weekdays.update);
// app.delete('/weekdays/:id', weekdays.delete);

app.get('/logs', logs.index);
app.get('/logs/:id', logs.findById);
app.post('/logs', logs.add);
app.put('/logs/:id', logs.update);
app.delete('/logs/:id', logs.delete);

app.get('/entries', entries.index);
app.get('/entries/:id', entries.findById);
app.post('/entries', entries.add);
app.put('/entries/:id', entries.update);
app.delete('/entries/:id', entries.delete);

module.exports = app;
// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });