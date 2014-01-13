var Routine = require('../models/routine').Routine;

exports.index = function(req, res) {
	Routine.find({}, function(err, docs) {
		if(!err) {
			res.json(200, { routines: docs });
		} else {
			res.json(500, { message: err });
		}
	});
}

exports.add = function(req, res) {

	var routine = req.body.routine;

	console.log('Adding routine: ' + JSON.stringify(routine));
	console.log(routine);

	Routine.create(routine, function(err, routine) {
		if(!err) {
			res.json(201, { routines: routine });
		} else {
            console.log(err);
			res.json(500, {message: "Could not add routine. Error: " + err});
		}
	});

}

exports.findById = function(req, res) {

	var id = req.params.id;

    console.log('Retrieving routine: ' + id);

    Routine.findById(id, function(err, routine) {

    	if (!err) {
    		res.json(200, { routines: routine });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.update = function(req, res) {

	var id = req.params.id,
    	routine = req.body;

    console.log('Updating routine: ' + id);
    console.log(JSON.stringify(routine));

    Routine.findByIdAndUpdate(id, routine, function(err, routine) {

    	if (!err) {
    		res.json(200, { routines: routine });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.delete = function(req, res) {

	var id = req.params.id;

    console.log('Deleting routine: ' + id);

    Routine.findByIdAndRemove(id, function(err, routine) {

    	if (!err) {
    		res.json(200, { routines: routine });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}