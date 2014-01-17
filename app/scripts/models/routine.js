WorkoutRoutine.Routine = DS.Model.extend({
	name         	: DS.attr('string'),
	description		: DS.attr('string'),
	workouts		: DS.hasMany('workout', {async:true}),
	creationDate 	: DS.attr('date'),
	plan			: DS.belongsTo('plan', {async:true})
});
