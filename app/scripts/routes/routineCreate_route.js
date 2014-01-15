WorkoutRoutine.RoutineCreateRoute = Ember.Route.extend({

	model: function() {
		return Ember.Object.create({
			'routine': this.store.createRecord('routine'),
			'workouts': this.store.find('workout')
		});
	},

	renderTemplate: function() {
		this.render('routine/edit', {
			outlet: 'routineCreate',
			controller: 'routineCreate'
		});
	}
});
