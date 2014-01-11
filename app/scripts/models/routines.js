App.Routine = DS.Model.extend({
	name         : DS.attr(),
	creationDate : DS.attr()
});

App.Routine.FIXTURE = [
	{
		name: 'Beginner',
		creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
	}
];