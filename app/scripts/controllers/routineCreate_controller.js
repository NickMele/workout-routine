WorkoutRoutine.RoutineCreateController = Em.ObjectController.extend({

	needs: "plan",

	actions: {
		save: function() {

			var scope = this,
				routine = scope.get('model');

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

		}
	}

});