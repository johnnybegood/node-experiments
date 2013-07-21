define([
        "jquery",
        "underscore",
        "backbone",
        "views/devices"
    ], function($, _, backbone, devicesView) {
        "use strict";

        var appView = backbone.View.extend({
            
            el: "#app",
            
            initialize: function() {
                var view = new devicesView();
                this.$el.html(view.render().el);
            }

        });

        return appView;
    });