WorkoutRoutine.Router.map(function () {

	this.resource('plans', function() {
		this.resource('plan', { path: '/:plan_id' }, function() {
			this.route('edit');
			this.resource('routines', function() {
				this.resource('routine', { path: '/:routine_id' }, function() {
					this.route('edit');
					this.route('workout', { path: 'workout/:workout_id' });
				});
			});
			this.resource('schedule');
		});
	});

});
