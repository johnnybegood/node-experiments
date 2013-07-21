requirejs.config({
    "baseUrl": "js",
    "paths": {
        "app": "app",
        "jquery": "//code.jquery.com/jquery"
    },
    shim: {
        underscore: {
            exports: '_'
        },
        bootstrap: { deps: ['jquery'] },
        backbone: {
            deps: [
				'underscore',
				'jquery'
            ],
            exports: 'Backbone'
        },
    }
});

requirejs([
    'app',
    'backbone',
    'bootstrap'
], function (app, backbone, bootstrap) {
    // this is where all the site code should begin
    new app();
});