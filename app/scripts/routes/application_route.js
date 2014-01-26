WorkoutRoutine.ApplicationRoute = Ember.Route.extend({

	actions: {
		openPanel: function(template, model) {
			this.controllerFor(template).set('model', model);
			this.controller.set('panelOpen', true);
			return this.render(template, {
				into: 'application',
				outlet: 'panel'
			});
		},
		closePanel: function() {
			this.controller.set('panelOpen', false);
			return this.disconnectOutlet({
				outlet: 'panel',
				parentView: 'application'
			});
		}
	}

});
