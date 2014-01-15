WorkoutRoutine.RoutineController = Ember.ObjectController.extend({

	isEditing: false,

	actions: {
		editRoutine: function() {
			this.set('isEditing', true);
			console.log('editing');
		},
		cancel: function() {
			this.set('isEditing', false);
		}
	}

});
