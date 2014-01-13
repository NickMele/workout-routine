WorkoutRoutine.PlanIndexRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('plan', params.plan_id);
	}
});
