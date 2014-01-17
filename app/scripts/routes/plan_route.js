WorkoutRoutine.PlanRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('plan', params.plan_id);
	},

	renderTemplate: function() {
		this.render('plan', {
			into: 'application'
		});
	}
});
