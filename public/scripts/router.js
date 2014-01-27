WorkoutRoutine.Router.map(function () {

	this.resource('plans', function() {
		this.resource('plan', { path: '/:plan_id' }, function() {
			this.route('edit');

			this.resource('routine', { path: '/:routine_id' }, function() {
				this.route('edit');
				this.route('log');

				this.resource('logs', function() {
					this.resource('log', { path: '/:log_id' }, function() {
						this.route('edit');
					});
					this.route('new');
				});

				this.resource('workout', { path: '/:workout_id' }, function() {
					this.route('edit');
				});

			});

		});
	});

});
