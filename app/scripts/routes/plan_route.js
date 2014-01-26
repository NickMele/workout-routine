WorkoutRoutine.PlanRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller, model);
		controller.set('weekdays', this.store.find('weekday'));
	}
});

WorkoutRoutine.PlanIndexRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('plan');
	}
});
