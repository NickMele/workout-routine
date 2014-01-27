WorkoutRoutine.RoutineLogRoute = Em.Route.extend({

	setupController: function(controller, model) {
		this._super(controller,model);

		var self = this;

		self.store.find('routine', this.controllerFor('routine').get('id')).then(function(routine) {
			controller.set('routine', routine);

			routine.get('workouts').then(function(workouts) {
				workouts.forEach(function(item, index, enumerable) {
					var entry = self.store.createRecord('entry', {
						workout: item
					});

					// entry.save().then(function() {
					// 	self.get('entries').pushObject(entry);
					// });
					controller.get('entries').pushObject(entry);
				});
			});
		});

	},

	model: function(params) {
		var store = this.store;
		return this.store.createRecord('log');
	}
});
