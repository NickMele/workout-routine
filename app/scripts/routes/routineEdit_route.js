WorkoutRoutine.RoutineEditRoute = Ember.Route.extend({

	model: function() {
		return this.modelFor('routine');
	},

	renderTemplate: function() {
		this.render('routine/edit', {
			into: 'plan'
		});
	}
});
