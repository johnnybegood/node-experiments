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
            }
        });

        return rowView;
    });