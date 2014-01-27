Em.Handlebars.registerBoundHelper('getWeekdayName', function(value) {

	if (moment().day() === value) {
		return "Today";
	} else if (value === moment().add('days', 1).day()) {
		return "Tomorrow";
	} else {
		return moment().isoWeekday(value).format('dddd');
	}

});

Em.Handlebars.registerBoundHelper('fromNow', function(value) {
	return moment(value).fromNow();
});

Em.Handlebars.registerBoundHelper('formatDate', function(value) {
	return moment(value).fromNow();
});

Em.Handlebars.registerBoundHelper('niceListOfRoutines', function(value) {

	var names = [];

    value.forEach(function(item, index) {
    	names.push(item.get('name'));
    });

    if (!names || names.length == 0) {
    	return "";
    }

  	var clone = names.slice(0);

	return function build() {
		if (clone.length == 1) return clone[0];
		if (clone.length == 2) return clone[0] + ' and ' + clone[1];
		return clone.shift() + ", " + build();
	}();
});
