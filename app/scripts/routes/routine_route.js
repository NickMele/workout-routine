WorkoutRoutine.RoutineIndexRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('routine', params.routine_id);
	},

	renderTemplate: function() {
		this.render('routine', {
			into: 'plan'
		});
	}
});
