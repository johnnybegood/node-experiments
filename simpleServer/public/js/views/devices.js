define([
        "underscore",
        "jquery",
        "backbone",
        "collections/devices",
        "text!templates/devices.html",
        "views/deviceRow",
        "views/deviceAdd"
    ],
    function (_, $, backbone, devices, template, rowView, addDeviceView) {
        "use strict";

        var devicesView = backbone.View.extend({
            template: _.template(template),
            addView: new addDeviceView(),
            events: {
                "click #add-device": "showAddDevice",
            },

            initialize: function () {
                this.listenTo(devices, "add", this.addOne);
                this.addView.on("save", this.saveNewDevice);
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

            showAddDevice: function() {
                $("#device-add-view").html(this.addView.render().el).show();
                $("#add-device").hide();
            },
            
            saveNewDevice: function(device) {
                devices.create(device);
                $("#device-add-view").hide();
                $("#add-device").show();
            }
        });

        return devicesView;
    });