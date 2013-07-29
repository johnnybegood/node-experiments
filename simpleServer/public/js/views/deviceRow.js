define([
        "underscore",
        "jquery",
        "backbone",
        "models/device",
        "collections/deviceTypes",
        "text!templates/deviceRow.html"
    ],
    function(_, $, backbone, device, types, template) {
        var rowView = Backbone.View.extend({
            tagName: "tr",
            template: _.template(template),
            model: device,
            types: types,
            events: {
                "click td": "showOptions",
                "mouseover td": "showHoverOptions",
                "click .delete-device": "deleteDevice"
            },

            render: function() {
                this.$el.html(this.template(this.extendModel()))
                    .data("id", this.model.id);
                return this;
            },
            
            extendModel: function() {
                var item = this.model.toJSON();
                var type = this.types.get(item.type);

                if (type) {
                    _.extend(item, { typeFullName: type.get("name") });
                } else {
                    _.extend(item, { typeFullName: "unkown" });
                }

                return item;
            },
            
            deleteDevice: function (e) {
                this.model.destroy();
                this.remove();

                e.preventDefault();
            },

            showHoverOptions: function (e) {
                this.showOptions(e);
                var rowOptions = this.$el.find(".rowOptions");

                this.$el.one("mouseout", function() { rowOptions.hide(); });
            },

            showOptions: function (e) {
                this.$el.find(".rowOptions").show();

                e.preventDefault();
            }
        });

        return rowView;
    });