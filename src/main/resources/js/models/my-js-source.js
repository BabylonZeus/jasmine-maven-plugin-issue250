define([  ],
	function() {
		var MyObject = Backbone.Model.extend({
			preFetch : function(options) {
				return false;
			}
		});

		var modelInstance = new MyObject({});

		return modelInstance;
	}
);
