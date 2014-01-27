WorkoutRoutine.LogIndexController = Em.ObjectController.extend({
	needs: ['plan', 'routine'],

	actions: {
		discard: function() {

			var self = this,
				log = this.get('model');

			log.destroyRecord();

			self.transitionToRoute('routine');

		},
		save: function() {

			var self = this,
				log = this.get('model'),
				entries = this.get('model.entries');

			entries.save().then(function() {
				log.save();
			})
		},
		complete: function() {

			var self = this,
				log = this.get('model'),
				entries = this.get('model.entries');

			log.set('completed', true);

			entries.save().then(function() {
				log.save();
			})

		}
	}
});

WorkoutRoutine.LogsNewController = Em.ObjectController.extend({
	needs: ['plan', 'routine'],

	actions: {
		discard: function() {

			var self = this,
				log = this.get('model');

			log.deleteRecord();

			self.transitionToRoute('routine');

		},
		save: function() {

			var self = this,
				log = this.get('model'),
				entries = this.get('model.entries');

			entries.save().then(function() {
				log.save().then(function() {
					self.transitionToRoute('log', log);
				});
			})

		},
		complete: function() {

			var self = this,
				log = this.get('model'),
				entries = this.get('model.entries');

			log.set('completed', true);

			entries.save().then(function() {
				log.save();
			})

		}
	}
});
