define([
        "jquery",
        "underscore",
        "backbone",
        "views/devices"
], function ($, _, backbone, devicesView) {
    "use strict";

    var masterView = backbone.View.extend({

        el: "#app",
        
        initialize: function () {
            this.devicesView = new devicesView();
        },

        render: function () {
            this.$el.html(this.devicesView.render().el);
        },

    });

    return masterView;
});