
/**
 * Module dependencies.
 */

var express = require('express'),
	workouts = require('./api/routes/workouts'),
	routines = require('./api/routes/routines'),
	plans = require('./api/routes/plans'),
	weekdays = require('./api/routes/weekdays'),
	logs = require('./api/routes/logs'),
	entries = require('./api/routes/entries'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/workout-routine');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);


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
app.get('/api/workouts', workouts.index);
app.get('/api/workouts/:id', workouts.findById);
app.post('/api/workouts', workouts.add);
app.put('/api/workouts/:id', workouts.update);
app.delete('/api/workouts/:id', workouts.delete);

app.get('/api/routines', routines.index);
app.get('/api/routines/:id', routines.findById);
app.post('/api/routines', routines.add);
app.put('/api/routines/:id', routines.update);
app.delete('/api/routines/:id', routines.delete);

app.get('/api/plans', plans.index);
app.get('/api/plans/:id', plans.findById);
app.post('/api/plans', plans.add);
app.put('/api/plans/:id', plans.update);
app.delete('/api/plans/:id', plans.delete);

app.get('/api/weekdays', weekdays.index);
app.get('/api/weekdays/:id', weekdays.findById);
// app.post('/api/weekdays', weekdays.add);
// app.put('/api/weekdays/:id', weekdays.update);
// app.delete('/api/weekdays/:id', weekdays.delete);

app.get('/api/logs', logs.index);
app.get('/api/logs/:id', logs.findById);
app.post('/api/logs', logs.add);
app.put('/api/logs/:id', logs.update);
app.delete('/api/logs/:id', logs.delete);

app.get('/api/entries', entries.index);
app.get('/api/entries/:id', entries.findById);
app.post('/api/entries', entries.add);
app.put('/api/entries/:id', entries.update);
app.delete('/api/entries/:id', entries.delete);

module.exports = app;
// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });