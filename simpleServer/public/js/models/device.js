define(["backbone", "backbone.validation"],
    
    function(backbone, validation) {
        'use strict';

        var deviceModel = backbone.Model.extend({
            idAttribute: "_id",

            validation: {
                name: {
                    required: true,
                    msg: "Please provide a name for the device"
                },
                type: {
                    required: true,
                    msg: "Please provide a device type"
                }
            }
        });

        return deviceModel;
    });
