WorkoutRoutine.Workout = DS.Model.extend({
	name         	: DS.attr('string'),
	description 	: DS.attr('string'),
	dateCreated 	: DS.attr('date')
});