define([
        'underscore',
        'backbone',
        'models/device'
    ],
    /************************************************/
    function(_, backbone, device) {
        var deviceCollection = backbone.Collection.extend({
            model: device,
            url: '/devices'
        });

        return deviceCollection;
    });