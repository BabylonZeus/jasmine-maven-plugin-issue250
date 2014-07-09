(function() {
	'use strict';

    var specs = [
        './src/js/models/my-js-source.spec.js'
    ];

	require(['boot', 'backbone-min', 'backbone-r6f'], function () {
	    require(specs, function () {
	        window.onload();
	    });
	});

	require.config({
		baseUrl: './src',

		paths : {
			//tested sources
			'src-models' : 'src/js/models',

			//libs jasmine
			'jasmine' : 'lib/jasmine2/jasmine',
	        'jasmine-html' : 'lib/jasmine2/jasmine-html',
	        'boot': 'lib/jasmine2/boot',

			//libs misc
			'backbone-min' : 'lib/backbone-min',
			'backbone-r6f' : 'lib/backbone-r6f-min',
			'underscore-min' : 'lib/underscore-min',
			jquery : 'lib/jquery',
		},

		shim: {
			'jasmine': {
				exports: 'window.jasmineRequire'
			},
			'jasmine-html': {
				deps: ['jasmine'],
				exports: 'window.jasmineRequire'
			},
			'boot': {
				deps: ['jasmine', 'jasmine-html'],
				exports: 'window.jasmineRequire'
			},

			'jquery' : {
				exports: '$'
			},
	        'backbone-min': {
	            //These script dependencies should be loaded before loading
	            //backbone.js
	            deps: ['underscore-min', 'jquery'],
	            //Once loaded, use the global 'Backbone' as the
	            //module value.
	            exports: 'Backbone'
	        },
	        'underscore-min': {
	            exports: '_'
	        }
	    }

	});

})();
