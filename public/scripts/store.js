WorkoutRoutine.Store = DS.Store.extend();
WorkoutRoutine.ApplicationAdapter = DS.RESTAdapter;

WorkoutRoutine.ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api'
});

WorkoutRoutine.ApplicationSerializer = DS.RESTSerializer.extend({
	primaryKey: '_id'
});