WorkoutRoutine.PlansIndexController = Ember.ArrayController.extend({

	actions: {
		create: function() {

			var self = this,
				name = this.get('newPlanName');

			if (!name.trim()) {
				return;
			}

			// Create the new plan model
			var plan = this.store.createRecord('plan', {
				name: name,
				description: '????',
				creationDate: new Date()
			});

			// clear out the value
			this.set('newPlanName', '');

			// Save the new model
			plan.save().then(function() {
				self.transitionToRoute('plan', plan);
			});

		}
	}

});