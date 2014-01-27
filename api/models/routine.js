var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var routineSchema = new Schema({
    name 		: { type: String, required: true, trim: true },
	description : { type: String, required: true },
	workouts	: [{ type: Schema.Types.ObjectId, ref: 'workout' }],
	weekdays	: [{ type: Schema.Types.ObjectId, ref: 'weekday' }],
	dateCreated : { type: Date, required: true, default: Date.now }
},
{
	versionKey: false
});

var routine = mongoose.model('routine', routineSchema);

module.exports = {
	Routine: routine
};