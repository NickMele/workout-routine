WorkoutRoutine.Routine = DS.Model.extend({
	name         	: DS.attr('string'),
	description		: DS.attr('string'),
	workouts		: DS.hasMany('workout', {embedded: 'always', async: true}),
	weekdays 		: DS.hasMany('weekday', {embedded: 'always'}),
	creationDate 	: DS.attr('date')
});
