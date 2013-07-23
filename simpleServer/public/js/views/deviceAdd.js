define([
        "underscore",
        "jquery",
        "backbone",
        "collections/deviceTypes",
        "text!templates/deviceAdd.html"
    ],
    function(_, $, backbone, types, template) {
        "use strict";

        var devicesView = backbone.View.extend({
            template: _.template(template),

            events: {
                "click #save-device": "save",
            },

            initialize: function() {
                types.fetch();
            },

            render: function() {
                this.$el.html(this.template({ items: types.toJSON() }));
                return this;
            },

            save: function() {
                this.trigger("save", { name: $("#newDeviceName").val(), type: $("#newDeviceType").val() });
            }
        });

        return devicesView;
    });