WorkoutRoutine.Router.map(function () {

	this.resource('plans');
	this.resource('plan', { path: '/:plan_id' }, function() {
		this.route('edit');
		this.resource('routines', function() {
			this.resource('routine', { path: '/:routine_id' }, function() {
				this.route('edit');
			});
		});
	});

});
