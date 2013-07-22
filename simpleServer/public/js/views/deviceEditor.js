define([
        "underscore",
        "jquery",
        "backbone",
        "collections/deviceTypes",
        "text!templates/deviceEditor.html"
    ],
    function (_, $, backbone, types, template) {
        "use strict";
        
        var devicesView = backbone.View.extend({
            template: _.template(template),

            collection: new types(),

            initialize: function() {
                this.listenTo(this.collection, "add", this.addOne);
                this.collection.fetch();
            },
            
            render: function() {
                this.$el.html(this.template());
                return this;
            },

            addOne: function(item) {
                console.log(item);
            },
        });

        return devicesView;
    });