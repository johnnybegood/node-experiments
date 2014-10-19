define([
        "underscore",
        "jquery",
        "backbone",
        "collections/deviceTypes",
        "text!templates/deviceAdd.html",
        "models/device",
        "collections/devices",
        "backbone.validation",
        "helpers/notifier",
        "router"
    ],
    function(_, $, backbone, types, template, device, deviceCollection, validation, notifier, router) {
        "use strict";

        var devicesView = backbone.View.extend({
            template: _.template(template),
            
            events: {
                "click #save-device": "save",
                "mouseover .invalid": "showError"
            },

            initialize: function() {

            },

            render: function() {
                this.$el.html(this.template({ items: types.toJSON() }));
                validation.bind(this);

                return this;
            },

            save: function () {
                var data = { name: this.$("#name").val(), type: this.$("#type").val() };
                
                if (this.model.set(data, {validate: true})) {
                    deviceCollection.create(this.model);
                    this.trigger("created", this.model);
                    notifier.success("Device <strong>" + data.name + "</strong> was successfully saved", this);
                    backbone.history.navigate("options/" + data.type + "/" + data.id)
                } else {
                    notifier.error("<strong>Oops,</strong> it appears the device you are trying to create is not valid", this);
                }
            },
            
            showError: function(e) {
                $(e.currentTarget).tooltip({
                    title: function () { return $(this).data("error"); },
                    trigger: "manual",
                    placement: "bottom"
                });

                $(e.currentTarget).one("mouseout", function() { $(e.currentTarget).tooltip("destroy"); });

                $(e.currentTarget).tooltip("show");
            }
        });

        return devicesView;
    });