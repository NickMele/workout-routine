var Workout = require('../models/workout').Workout;

exports.index = function(req, res) {
	Workout.find({}, function(err, docs) {
		if(!err) {
			res.json(200, { workouts: docs });
		} else {
			res.json(500, { message: err });
		}
	});
}

exports.add = function(req, res) {

	var workout = req.body;

	console.log('Adding workout: ' + JSON.stringify(workout));

	console.log(workout);

	Workout.create(workout, function(err, workout) {
		if(!err) {
			res.json(201, {message: "Workout added with name: " + workout.name });
		} else {
			res.json(500, {message: "Could not add workout. Error: " + err});
		}
	});

}

exports.findById = function(req, res) {

	var id = req.params.id;

    console.log('Retrieving workout: ' + id);

    Workout.findById(id, function(err, workout) {

    	if (!err) {
    		res.json(200, { workouts: workout });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.update = function(req, res) {

	var id = req.params.id,
    	workout = req.body;

    console.log('Updating workout: ' + id);
    console.log(JSON.stringify(workout));

    Workout.findByIdAndUpdate(id, workout, function(err, workout) {

    	if (!err) {
    		res.json(200, { workouts: workout });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.delete = function(req, res) {

	var id = req.params.id;

    console.log('Deleting workout: ' + id);

    Workout.findByIdAndRemove(id, function(err, workout) {

    	if (!err) {
    		res.json(200, { workouts: workout });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}