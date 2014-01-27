WorkoutRoutine.RoutineCreateController = Em.Controller.extend({

	needs: "plan",

	selectedWorkout: null,

	actions: {

		addWorkoutToRoutine: function() {

			var routineWorkouts = this.get('model.routine.workouts'),
				selectedWorkout = this.get('selectedWorkout'),
				workouts = this.get('model.workouts');

			selectedWorkout = workouts.filterBy('id', selectedWorkout).get('firstObject');

			routineWorkouts.then(function() {
				routineWorkouts.pushObject(selectedWorkout);
			});

			this.set('selectedWorkout', null);

		},

		save: function() {

			var scope = this,
				routine = scope.get('model.routine');

			routine.setProperties({
				'creationDate': new Date()
			});

			var plan = scope.get('controllers.plan.content');

			routine.save().then(function() {

				plan.get('routines').addObject(routine);

				plan.save().then(function() {

					scope.transitionToRoute('plan', plan);

				});

			});

		},

		cancel: function() {

			var routine = this.get('model.routine');

			routine.deleteRecord();

			this.transitionToRoute('plan');

		}
	}

});