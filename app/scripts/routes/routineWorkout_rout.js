WorkoutRoutine.RoutineWorkoutRoute = Em.Route.extend({
	model: function(params) {
		return this.store.find('workout', params.workout_id);
	},
	renderTemplate: function() {
		this.render('routine/workout', {
			into: 'plan',
		});
	}
});
