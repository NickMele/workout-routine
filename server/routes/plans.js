var Plan = require('../models/plan').Plan;

exports.index = function(req, res) {
    Plan.find({}, function(err, docs) {
        if(!err) {
            res.json(200, { plans: docs });
        } else {
            res.json(500, { message: err });
        }
    });
}

exports.add = function(req, res) {

    var plan = req.body.plan;

    console.log('Adding plan: ' + JSON.stringify(plan));
    console.log(plan);

    Plan.create(plan, function(err, plan) {
        if(!err) {
            res.json(201, { plans: plan });
        } else {
            res.json(500, {message: "Could not add plan. Error: " + err});
        }
    });

}

exports.findById = function(req, res) {

    var id = req.params.id;

    console.log('Retrieving plan: ' + id);

    Plan.findById(id, function(err, plan) {

        if (!err) {
            res.json(200, { plans: plan });
        } else {
            res.json(500, { message: err });
        }

    });

}

exports.update = function(req, res) {

    var id = req.params.id,
        plan = req.body.plan;

    console.log('Updating plan: ' + id);
    console.log(JSON.stringify(plan));

    Plan.findByIdAndUpdate(id, plan, function(err, plan) {

        if (!err) {
            res.json(200, { plans: plan });
        } else {
            res.json(500, { message: err });
        }

    });

}

exports.delete = function(req, res) {

    var id = req.params.id;

    console.log('Deleting plan: ' + id);

    Plan.findByIdAndRemove(id, function(err, plan) {

        if (!err) {
            res.json(200, { plans: plan });
        } else {
            res.json(500, { message: err });
        }

    });

}