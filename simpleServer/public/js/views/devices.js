define([
        "underscore",
        "jquery",
        "backbone",
        "collections/devices",
        "collections/deviceTypes",
        "text!templates/devices.html",
        "views/deviceRow",
        "views/deviceAdd"
    ],
    function (_, $, backbone, devices, types, template, rowView, addDeviceView) {
        "use strict";

        var devicesView = backbone.View.extend({
            template: _.template(template),
            addView: new addDeviceView(),
            activeRow: undefined,
            events: {
                "click #add-device": "showAddDevice",
                "click tbody tr": "showOptions",
                "mouseover tbody tr": "showHoverOptions",
                "click .delete-device": "deleteDevice"
            },

            initialize: function () {
                this.listenTo(devices, "add", this.addOne);
                this.addView.on("save", this.saveNewDevice);

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

            showAddDevice: function() {
                $("#device-add-view").html(this.addView.render().el).show();
                $("#add-device").hide();
            },
            
            saveNewDevice: function(device) {
                devices.create(device);
                $("#device-add-view").hide();
                $("#add-device").show();
            },
            
            deleteDevice: function(e) {
                var row = $(e.currentTarget).parents("tr");
                var item = devices.get(row.data("id"));
                item.destroy();
                
                e.preventDefault();
            },
            
            showHoverOptions: function (e) {
                var row = $(e.currentTarget);
                this.showOptions(e);

                this.$el.one("mouseout", "tbody tr", function() {
                    $(row).find(".rowOptions").hide();
                });
            },
            
            showOptions: function (e) {
                var row = $(e.currentTarget);
                var options = row.find(".rowOptions");

                options.show();
                $(".rowOptions").not(options).hide();
                
                e.preventDefault();
            }
            

        });

        return devicesView;
    });