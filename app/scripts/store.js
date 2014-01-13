WorkoutRoutine.Store = DS.Store.extend();
WorkoutRoutine.ApplicationAdapter = DS.RESTAdapter;

WorkoutRoutine.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost:9001'
});

WorkoutRoutine.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});