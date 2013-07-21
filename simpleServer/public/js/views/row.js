define([
        "underscore",
        "jquery",
        "backbone",
        "models/device",
        "text!templates/device.html"
    ],
    function(_, $, backbone, device, template) {
        var rowView = Backbone.View.extend({
            tagName: "tr",
            template: _.template(template),
            model: device,

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return rowView;
    });