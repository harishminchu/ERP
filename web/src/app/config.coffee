requirejs.config
	shim:
		jquery:
			exports: 'jQuery'

		sprintf:
			exports: 'sprintf'

		underscore:
			exports: '_'

		backbone:
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'

		bootstrap:
			deps: ['jquery'],
			exports: 'Bootstrap'

	paths:
		jquery: 	'../assets/js/libs/jquery'
		backbone: 	'../assets/js/libs/backbone'
		bootstrap: 	'../assets/js/libs/bootstrap'
		underscore: '../assets/js/libs/underscore'
		subroute: 	'../assets/js/libs/backbone.subroute'
		sprintf: 	'../assets/js/libs/sprintf'
		text:		'../assets/js/libs/text'


require [
	'controllers/core'
	'subroute'
	'text'
],
(CoreController)->
	new CoreController()