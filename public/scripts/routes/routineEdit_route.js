WorkoutRoutine.RoutineEditRoute = Em.Route.extend({
	model: function() {
		return this.modelFor('routine');
	},
	renderTemplate: function() {
		this.render('routine/edit', {
			into: 'plan',
			controller: 'routine.edit'
		})
	}
});
