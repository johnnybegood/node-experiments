define([
        "underscore",
        "jquery",
        "backbone",
        "collections/deviceTypes",
        "text!templates/deviceAdd.html",
        "models/device",
        "collections/devices",
        "backbone.validation",
        "helpers/notifier"
    ],
    function(_, $, backbone, types, template, device, deviceCollection, validation, notifier) {
        "use strict";

        var devicesView = backbone.View.extend({
            template: _.template(template),
            
            events: {
                "click #save-device": "save",
            },

            initialize: function() {

            },

            render: function() {
                this.$el.html(this.template({ items: types.toJSON() }));
                validation.bind(this);
                return this;
            },

            save: function () {
                var data = { name: $("#newDeviceName").val(), type: $("#newDeviceType").val() };
                this.model.set(data);
                
                if (this.model.isValid(true)) {
                    deviceCollection.create(this.model);
                    this.trigger("created", this.model);
                    notifier.success("Device <strong>" + data.name + "</strong> was successfully saved", this);
                } else {
                    notifier.error("<strong>Oops,</strong> it appears the device you are trying to create is not valid", this);
                }
                
            }
        });

        return devicesView;
    });