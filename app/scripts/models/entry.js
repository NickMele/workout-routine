WorkoutRoutine.Entry = DS.Model.extend({
	dateCreated 	: DS.attr('date', {
      defaultValue: function() { return new Date(); }
  	}),
    workout			: DS.belongsTo('workout'),
    completed		: DS.attr('boolean'),
    dateCompleted	: DS.attr('date')
});
