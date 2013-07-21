define([
        "underscore",
        "jquery",
        "backbone",
        "collections/devices",
        "text!templates/devices.html",
        "views/row"
    ],
    function (_, $, backbone, devices, template, rowView) {
        "use strict";

        var devicesView = backbone.View.extend({
            template: _.template(template),
            events: {
                "click #add-device": "showAddDevice",
                "click #save-device": "saveDevice"
            },

            collection: new devices(),

            initialize: function() {
                this.listenTo(this.collection, "add", this.addOne);
                this.collection.fetch();
            },
            
            render: function() {
                this.$el.html(this.template());
                this.$el.find("#device-editor").hide();
                return this;
            },

            addOne: function(item) {
                var view = new rowView({ model: item });
                $("#allDevices").append(view.render().el);
            },

            showAddDevice: function() {
                $("#device-editor").show();
                $("#add-device").hide();
            },

            saveDevice: function() {
                var item = { Name: $("#newDeviceName").val(), Type: $("#newDeviceType").val() };
                this.collection.create(item);
            }
        });

        return devicesView;
    });