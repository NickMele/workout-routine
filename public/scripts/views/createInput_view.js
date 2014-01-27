WorkoutRoutine.CreateInputView = Ember.TextField.extend({
	focusOut: function() {
		this.$().parent('li').removeClass('active');
	},
	valueChanged: function() {
		if (!Ember.isEmpty(this.get('value'))) {
			this.$().parent('li').addClass('active');
		}
	}.observes('value')
});

Ember.Handlebars.helper('create-input', WorkoutRoutine.CreateInputView);