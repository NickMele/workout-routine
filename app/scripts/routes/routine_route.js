WorkoutRoutine.RoutineIndexRoute = Ember.Route.extend({

	setupController: function(controller, model) {
		this._super(controller, model);

		var self = this,
			routineId = model.get('id');

		controller.set('logs', self.store.find('log', { routine: routineId, limit: 3 }));
	},

	model: function(params) {
		return this.modelFor('routine');
	}
});