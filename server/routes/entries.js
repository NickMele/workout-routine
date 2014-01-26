var Entry = require('../models/entry').Entry;

exports.index = function(req, res) {

    var conditions = {}

    if (req.query.ids) {
        conditions._id = { $in: req.query.ids };
    }

	Entry.find(conditions, function(err, docs) {
		if(!err) {
			res.json(200, { entries: docs });
		} else {
			res.json(500, { message: err });
		}
	});
}

exports.add = function(req, res) {

	var entry = req.body.entry;

	console.log('Adding entry: ' + JSON.stringify(entry));
	console.log(entry);

	Entry.create(entry, function(err, entry) {
		if(!err) {
			res.json(201, { entries: entry });
		} else {
            console.log(err);
			res.json(500, {message: "Could not add entry. Error: " + err});
		}
	});

}

exports.findById = function(req, res) {

	var id = req.params.id;

    console.log('Retrieving entries: ' + id);

    Entry.findById(id, function(err, entries) {

    	if (!err) {
    		res.json(200, { entries: entries });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.update = function(req, res) {

	var id = req.params.id,
    	entries = req.body.entries;

    console.log('Updating entries: ' + id);
    console.log(JSON.stringify(entries));

    Entry.findByIdAndUpdate(id, entries, function(err, entries) {

    	if (!err) {
    		res.json(200, { entriess: entries });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}

exports.delete = function(req, res) {

	var id = req.params.id;

    console.log('Deleting entries: ' + id);

    Entry.findByIdAndRemove(id, function(err, entries) {

    	if (!err) {
    		res.json(200, { entries: entries });
    	} else {
    		res.json(500, { message: err });
    	}

    });

}