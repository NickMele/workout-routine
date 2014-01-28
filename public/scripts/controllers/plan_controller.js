WorkoutRoutine.PlanIndexController = Ember.ObjectController.extend({

	showOptions: false,

	quickSchedule: function() {

		var routines = this.get('routines'),
			quickSchedule = [];
			today = moment().day(),
			daysToGet = 4;

		for(x = today; x < (today+daysToGet); x++) {

			var day = moment().day(x).day(),
				foundRoutines = routines.filter(function(item, index, enumerable) {
					return item.get('weekdays').findBy('day', day);
				});

			quickSchedule.pushObject({
				'day': day,
				'routines': foundRoutines
			});
		}

		return quickSchedule;

	}.property('routines.@each.weekdays'),

	actions: {
		showOptions: function() {
			this.set('showOptions', true);
		},
		toggleStatus: function() {

			var self = this.get('model'),
				status = self.get('active');

			// we want to toggle the status
			self.set('active', !status);

			self.get('routines').then(function() {
				self.save().then(function() {
					self.set('showOptions', false);
				});
			});

		},
		create: function() {

			var self = this,
				name = this.get('newRoutineName');

			if (!name.trim()) {
				return;
			}

			// Create the new plan model
			var routine = this.store.createRecord('routine', {
				name: name,
				description: '????',
				occurs: ["monday","tuesday"],
				creationDate: new Date()
			});

			// clear out the value
			this.set('newRoutineName', '');

			// Save the new model
			routine.save().then(function() {
				self.get('model.routines').pushObject(routine);
				self.get('model').save();
			});

		}
	},

	planState: function() {
		return (this.get('active')) ? "active" : "inactive";
	}.property('active'),

	planStateAction: function() {
		return (this.get('active')) ? "stop plan" : "start plan";
	}.property('active')

});

WorkoutRoutine.PlanEditController = Em.ObjectController.extend({

	actions: {
		toggleStatus: function() {

			var self = this.get('model'),
				status = self.get('active');

			// we want to toggle the status
			self.set('active', !status);

		},
		cancel: function() {
			var self = this,
				plan = this.get('model'),
				routines = plan.get('routines');

			plan.rollback();

			routines.forEach(function(item) {
				if (item.get('isDirty')) {
					item.rollback();
				}
			});

			self.send('closePanel');

		},
		save: function() {
			var self = this,
				plan = this.get('model'),
				routines = plan.get('routines');

			// make sure we get all routines before saving
			routines.then(function() {

				routines.forEach(function(item) {
					if (item.get('isDirty')) {
						item.get('workouts').then(function() {
							item.save();
						});
					}
				});

				plan.save();
				// close the panel
				self.send('closePanel');
			});
		},
		deleteRoutine: function(routine) {

			var self = this,
				plan = this.get('model')

			plan.get('routines').removeObject(routine);

			plan.save();

			routine.destroyRecord();

		}
	},

	planState: function() {
		return (this.get('active')) ? "active" : "inactive";
	}.property('active'),

});
