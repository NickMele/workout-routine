WorkoutRoutine.RoutineCreateRoute = Em.Route.extend({

	model: function() {
		return this.store.createRecord('routine');
	},

	renderTemplate: function() {
		this.render('routine/edit', {
			outlet: 'routineCreate',
			controller: 'routineCreate'
		});
	}
});
