WorkoutRoutine.LogIndexRoute = Em.Route.extend({
	model: function(params) {
		return this.modelFor('log');
	}
});

WorkoutRoutine.LogsNewRoute = Em.Route.extend({
	setupController: function(controller, model) {
		this._super(controller,model);

		var self = this;

		self.store.find('routine', this.controllerFor('routine').get('id')).then(function(routine) {
			model.set('routine', routine);

			routine.get('workouts').then(function(workouts) {
				workouts.forEach(function(item, index, enumerable) {
					var entry = self.store.createRecord('entry', {
						workout: item
					});

					model.get('entries').pushObject(entry);
				});
			});
		});

	},

	model: function(params) {
		var store = this.store;
		return this.store.createRecord('log');
	},

	renderTemplate: function() {
		this.render('log.index', {
			controller: 'logsNew'
		})
	}
});
