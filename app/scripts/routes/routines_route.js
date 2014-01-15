WorkoutRoutine.RoutinesIndexRoute = Ember.Route.extend({
	model: function(params) {
		return this.modelFor('plan');
	},

	renderTemplate: function() {
		this.render('plan/routines', {
			into: 'plan'
		});
	}
});
