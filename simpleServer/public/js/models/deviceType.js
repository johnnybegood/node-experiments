define(['backbone'],

    function (backbone) {
        'use strict';

        var deviceTypeModel = backbone.Model.extend({
            idAttribute: "code"
        });

        return deviceTypeModel;
    });
