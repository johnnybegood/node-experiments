define([
        "underscore",
        "jquery",
        "backbone",
        "models/device",
        "collections/devices",
        "collections/deviceTypes",
        "text!templates/devices.html",
        "views/deviceRow",
        "views/deviceAdd"
    ],
    function (_, $, backbone, deviceModel, devices, types, template, rowView, addDeviceView) {
        "use strict";

        var devicesView = backbone.View.extend({
            template: _.template(template),
            activeRow: undefined,
            events: {
                "click #add-device": "showAddDevice",
                "click tbody tr": "showOptions",
                "mouseover tbody tr": "showHoverOptions",
                "click .delete-device": "deleteDevice"
            },

            initialize: function () {
                this.listenTo(devices, "add", this.addOne);

                types.fetch();
                devices.fetch();
            },
            
            render: function() {
                this.$el.html(this.template());
                return this;
            },

            addOne: function(item) {
                var view = new rowView({ model: item });
                $("#allDevices").append(view.render().el);
            },

            showAddDevice: function () {
                var view = new addDeviceView({ model: new deviceModel() });
                view.once("created", this.saveNewDevice);
                $("#device-add-view").html(view.render().el).show();
                $("#add-device").hide();
            },
            
            saveNewDevice: function() {
                $("#device-add-view").hide();
                $("#add-device").show();
            }
        });

        return devicesView;
    });