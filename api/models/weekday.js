var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var weekdaySchema = new Schema({
    day			: { type: Number, required: true, unique: true },
    name 		: { type: String, required: true, trim: true }
},
{
	versionKey: false
});

var weekday = mongoose.model('weekday', weekdaySchema);

module.exports = {
	Weekday: weekday
};