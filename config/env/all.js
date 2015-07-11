'use strict';

module.exports = {
	app: {
		title: 'myPM',
		description: 'Full-Stack Property Management',
		keywords: 'Vendor, Purchaser, Vendor Property, Vendor Purchaser Property Search'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				//'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				//'public/lib/sb-admin2/font-awesome/css/font-awesome.min.css',
				'public/lib/sb-admin2/metisMenu/dist/metisMenu.min.css',
				'public/lib/sb-admin2/dist/css/sb-admin-2.css'

			],
			js: [
				'public/lib/sb-admin2/jquery/dist/jquery.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/sb-admin2/metisMenu/dist/metisMenu.min.js',
				'public/lib/sb-admin2/dist/js/sb-admin-2.js',

			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
