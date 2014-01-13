WorkoutRoutine.Plan = DS.Model.extend({
	name         	: DS.attr('string'),
	description		: DS.attr('string'),
	routines		: DS.hasMany('routine', {async:true}),
	creationDate 	: DS.attr('date')
});
