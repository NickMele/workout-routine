WorkoutRoutine.Entry = DS.Model.extend({
	dateCreated 	: DS.attr('date', {
      defaultValue: function() { return new Date(); }
  	}),
    workout			: DS.belongsTo('workout', {embedded: 'always', async:true}),
    //log				: DS.belongsTo('log', {embedded: 'always', async:true}),
    completed		: DS.attr('boolean'),
    dateCompleted	: DS.attr('date')
});
