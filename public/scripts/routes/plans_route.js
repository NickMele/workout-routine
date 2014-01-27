WorkoutRoutine.PlansIndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('plan');
	}

	// afterModel: function(plans) {
	// 	if (plans.get('length') > 0) {
	// 		this.transitionTo('plan', plans.get('firstObject'));
	// 	}
	// }
});
