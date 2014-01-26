var Log = require('../models/log').Log;

exports.index = function(req, res) {

    var conditions = {},
        options = {
            sort: {
                dateCreated: -1
            }
        };

    if (req.query.ids) {
        conditions._id = { $in: req.query.ids };
    } else if (req.query.routine) {
        conditions.routine =  req.query.routine;
    }

    if (req.query.limit) {
        options.limit = req.query.limit;
    }

    console.log(conditions, options);

	Log.find(conditions, null, options, function(err, docs) {
		if(!err) {
			res.json(200, { logs: docs });
		} else {
			res.json(500, { message: err });
		}
	});
}

exports.add = function(req, res) {

	var log = req.body.log;

	console.log('Adding log: ' + JSON.stringify(log));
	console.log(log);

	Log.create(log, function(err, logs) {
		if(!err) {
			res.json(201, { logs: logs });
		} else {
            console.log(err);
			res.json(500, {message: "Could not add logs. Error: " + err});
		}
	});

}

exports.findById = function(req, res) {

	var id = req.params.id;

    console.log('Retrieving logs: ' + id);

    Log.findById(id, function(err, logs) {

    	if (!err) {
    		res.json(200, { logs: logs });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.update = function(req, res) {

	var id = req.params.id,
    	logs = req.body.logs;

    console.log('Updating logs: ' + id);
    console.log(JSON.stringify(logs));

    Log.findByIdAndUpdate(id, logs, function(err, logs) {

    	if (!err) {
    		res.json(200, { logss: logs });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.delete = function(req, res) {

	var id = req.params.id;

    console.log('Deleting logs: ' + id);

    Log.findByIdAndRemove(id, function(err, logs) {

    	if (!err) {
    		res.json(200, { logs: logs });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}