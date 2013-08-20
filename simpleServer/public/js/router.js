define([
        "jquery",
        "underscore",
        "backbone",
        "views/devices"
], function ($, _, backbone, devicesView) {
    "use strict";

    var router = backbone.Router.extend({
        routes: {
            "" : "index",
            "options/:kind/:id" : "showOptions"
        },
        
        initialize: function() {
            this.app = $("#app");
        },
        
        index: function () {
            this.app.html(new devicesView().render().el);
        },
        
        showOptions: function (kind, id) {
            var view = require("deviceTypes/" + kind);
            this.app.html(new view({id: id}).render().el);
        }
    });

    return router;
});