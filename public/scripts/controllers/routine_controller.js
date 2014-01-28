WorkoutRoutine.RoutineIndexController = Ember.ObjectController.extend({

	needs: 'plan',

	init: function() {
		this.set('days', this.store.find('weekday'));
	},

	refreshLogs: function() {
		var routineId = this.get('id');
		this.set('logs', this.store.find('log', { routine: routineId, limit: 3 }));
	},

	userTasks: function() {

		var tasks = [],
			logs = this.get('logs'),
			schedule = this.get('schedule');

		// make sure the logs are loaded
		logs.then(function() {

			// ask the user if they want to log their workouts
			if (schedule.get('firstObject').get('isToday')) {
				tasks.pushObject({
					task: null,
					buttons: [
						{
							action: 'addLog',
							text: 'Log workouts',
							color: 'button-blue'
						},
						{
							action: '',
							text: 'Skip today',
							color: 'button-red'
						}
					]
				});
			}

		});

		return tasks;

	}.property('schedule', 'logs'),

	schedule: function() {

		var weekdays = this.get('weekdays'),
			today = moment().day();

		var schedule = weekdays.map(function(item ,index, enumerable) {

			var dayToCheck = item.get('day');

			// if the day we are checking is less than today, offset it by a week
			if (dayToCheck < today) {
				dayToCheck += 7;
			}

			return Ember.Object.create({
				// the order is a representation of the differnce between
				// our day to check and today
				order: dayToCheck - today,
				day: item.get('day'),
				isToday: (item.get('day') === today)
			});

		});

		// we want to sort this array by the order
		// placing the the first item as the one that is closest to today
		schedule.sort(function(a, b) {
			return a.order - b.order;
		});

		return schedule;

	}.property('weekdays'),

	next: function() {

		var schedule = this.get('schedule');

		// we just need to return the first object
		return schedule.get('firstObject');

	}.property('schedule'),

	actions: {
		toggleWeekday: function(weekday, isCurrentlyActive) {
			var self = this,
				routine = this.get('model'),
				currentWeekdays = routine.get('weekdays');

			if (isCurrentlyActive) {
				currentWeekdays.removeObject(weekday);
			} else {
				currentWeekdays.pushObject(weekday);
			}

			routine.get('workouts').then(function() {
				routine.save();
			});

		},
		create: function() {

			var self = this,
				name = this.get('newWorkoutName');

			if (!name.trim()) {
				return;
			}

			// Create the new workout model
			var workout = this.store.createRecord('workout', {
				name: name,
				description: '????',
				dateCreated: new Date()
			});

			// clear out the value
			this.set('newWorkoutName', '');

			// Save the new model
			workout.save().then(function() {
				self.get('model.workouts').pushObject(workout);
				self.get('model').save();
			});

		},
		doTask: function(action) {
			this.send(action);
		}
	}

});

WorkoutRoutine.RoutineEditController = Em.ObjectController.extend({

	actions: {
		cancel: function() {
			var self = this,
				routine = this.get('model');

			routine.rollback();

			self.send('closePanel');
		},
		save: function() {
			var self = this,
				routine = this.get('model');

			// make sure we get all routines before saving
			routine.get('workouts').then(function() {
				routine.save();
				// close the panel
				self.send('closePanel');
			});
		},
		deleteWorkout: function(workout) {

			var self = this,
				routine = this.get('model')

			routine.get('workouts').removeObject(workout);

			routine.save();

			workout.destroyRecord();

		}
	}

});