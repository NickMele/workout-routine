var Weekday = require('../models/weekday').Weekday;

exports.index = function(req, res) {

    var conditions = {}

    if (req.query.ids) {
        conditions._id = { $in: req.query.ids };
    }

	Weekday.find(conditions, function(err, docs) {
		if(!err) {
			res.json(200, { weekdays: docs });
		} else {
			res.json(500, { message: err });
		}
	});
}

exports.add = function(req, res) {

	var weekdays = req.body.weekdays;

	console.log('Adding weekdays: ' + JSON.stringify(weekdays));
	console.log(weekdays);

	Weekday.create(weekdays, function(err, weekdays) {
		if(!err) {
			res.json(201, { weekdays: weekdays });
		} else {
            console.log(err);
			res.json(500, {message: "Could not add weekdays. Error: " + err});
		}
	});

}

exports.findById = function(req, res) {

	var id = req.params.id;

    console.log('Retrieving weekdays: ' + id);

    Weekday.findById(id, function(err, weekdays) {

    	if (!err) {
    		res.json(200, { weekdays: weekdays });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.update = function(req, res) {

	var id = req.params.id,
    	weekdays = req.body.weekdays;

    console.log('Updating weekdays: ' + id);
    console.log(JSON.stringify(weekdays));

    Weekday.findByIdAndUpdate(id, weekdays, function(err, weekdays) {

    	if (!err) {
    		res.json(200, { weekdayss: weekdays });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.delete = function(req, res) {

	var id = req.params.id;

    console.log('Deleting weekdays: ' + id);

    Weekday.findByIdAndRemove(id, function(err, weekdays) {

    	if (!err) {
    		res.json(200, { weekdays: weekdays });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}