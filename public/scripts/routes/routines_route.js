WorkoutRoutine.RoutinesIndexRoute = Ember.Route.extend({

	model: function() {
		return this.store.find('routine');
	}

});