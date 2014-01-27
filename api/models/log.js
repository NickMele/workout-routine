var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var logSchema = new Schema({
    routine			: { type: Schema.Types.ObjectId, required: true, ref: 'routine' },
	dateCreated 	: { type: Date, required: true, default: Date.now },
    entries			: [{ type: Schema.Types.ObjectId, ref: 'entry' }],
    completed		: { type: Boolean, default: false },
    dateCompleted	: { type: Date }
},
{
	versionKey: false
});

var log = mongoose.model('log', logSchema);

module.exports = {
	Log: log
};