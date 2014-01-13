var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var workoutSchema = new Schema({
    name : { type: String, required: true, trim: true },
	description : { type: String, required: true },
	dateCreated : { type: Date, required: true, default: Date.now },
},
{
	versionKey: false
});

var workout = mongoose.model('workout', workoutSchema);

module.exports = {
	Workout: workout
};