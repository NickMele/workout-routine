WorkoutRoutine.RoutineLogRoute = Em.Route.extend({
	model: function(params) {
		var store = this.store;
		return this.store.createRecord('log');
	}
});
