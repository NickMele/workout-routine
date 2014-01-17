WorkoutRoutine.RoutineIndexRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller, model);
		controller.set('selectedWorkout', null);
	},
	model: function(params) {
		return this.modelFor('routine');
	},
	renderTemplate: function() {
		this.render('routine', {
			into: 'plan',
			controller: 'routine.index'
		})
	}
});