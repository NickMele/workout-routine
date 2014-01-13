var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var planSchema = new Schema({
    name : { type: String, required: true, trim: true },
	description : { type: String, required: true },
	routines: [{ type: Schema.Types.ObjectId, ref: 'routine' }],
	dateCreated : { type: Date, required: true, default: Date.now },
},
{
	versionKey: false
});

var plan = mongoose.model('plan', planSchema);

module.exports = {
	Plan: plan
};