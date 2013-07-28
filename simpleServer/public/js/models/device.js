define(['backbone'],
    
    function(backbone) {
        'use strict';

        var deviceModel = backbone.Model.extend({
            idAttribute: "_id"
        });

        return deviceModel;
    });
