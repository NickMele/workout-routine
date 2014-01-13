WorkoutRoutine.Router.map(function () {

	this.resource('plans');
	this.resource('plan', { path: 'plans/:plan_id' }, function() {
		this.resource('routineCreate', { path: '/routine/create' });
	});

});
