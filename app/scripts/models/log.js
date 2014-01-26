WorkoutRoutine.Log = DS.Model.extend({
	routine			: DS.belongsTo('routine', {embedded: 'always', async:true}),
	dateCreated 	: DS.attr('date', {
      defaultValue: function() { return new Date(); }
  	}),
    entries			: DS.hasMany('entry'),
    completed		: DS.attr('boolean'),
    dateCompleted	: DS.attr('date')
});
