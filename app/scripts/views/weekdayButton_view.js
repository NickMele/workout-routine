WorkoutRoutine.WeekdayButtonView = Em.View.extend({
	tagName: 'button',
	classNames: ['button button-small button-green'],
	classNameBindings: ['active:circle', 'isToday:current-day'],

	click: function() {
		this.get('controller').send('toggleWeekday', this.get('weekday'), this.get('active'));
	},

	active: function() {

		var weekday = this.get('weekday'),
			routineWeekdays = this.get('routineWeekdays');

		return routineWeekdays.contains(weekday);

	}.property('weekday', 'routineWeekdays.@each'),

	isToday: function() {

		var day = this.get('weekday').get('day');

		if (day === moment().day()) {
			return true;
		} else {
			return false;
		}

	}.property('weekday')

});

Ember.Handlebars.helper('weekday-button', WorkoutRoutine.WeekdayButtonView);