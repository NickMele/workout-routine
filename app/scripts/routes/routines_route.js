WorkoutRoutine.RoutinesIndexRoute = Ember.Route.extend({

	model: function() {
		return this.modelFor('plan');
	},

	renderTemplate: function() {
		this.render('routines', {
			into: 'plan',
			controller: 'routines.index'
		});
	}

});
