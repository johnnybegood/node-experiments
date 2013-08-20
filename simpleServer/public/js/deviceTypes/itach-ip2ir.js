define([
    "underscore",
    "jquery",
    "backbone",
    "text!deviceTypes/templates/ip2ir-options"
],
    function (_, $, backbone, template) {
        "use strict";
        
        var ip2IrView = backbone.View.extend({
            template: _.template(template),

            initialize: function() {

            },
            
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });

        return ip2IrView;
    })