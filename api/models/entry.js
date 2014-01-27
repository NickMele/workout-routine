var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var entrySchema = new Schema({
    dateCreated 	: { type: Date, required: true, default: Date.now },
    workout			: { type: Schema.Types.ObjectId, ref: 'workout' },
    // log				: { type: Schema.Types.ObjectId, required: true, ref: 'log' },
    completed		: { type: Boolean, default: false },
    dateCompleted	: { type: Date }
},
{
	versionKey: false
});

var entry = mongoose.model('entry', entrySchema);

module.exports = {
	Entry: entry
};