var WorkoutRoutine = window.WorkoutRoutine = Ember.Application.create({
	LOG_TRANSITIONS_INTERNAL: true
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/helpers');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');