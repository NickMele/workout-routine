WorkoutRoutine.WorkoutRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('workout');
	}
});