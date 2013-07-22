define([
        'underscore',
        'backbone',
        'models/deviceType'
],
    /************************************************/
    function (_, backbone, deviceType) {
        var deviceTypeCollection = backbone.Collection.extend({
            model: deviceType,
            url: '/deviceTypes'
        });

        return deviceTypeCollection;
    });