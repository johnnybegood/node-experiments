/*
 * GET /devices/
 */

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/homegate');

var deviceSchema = new mongoose.Schema({
    name: String,
    type: String
});

var DeviceModel = mongoose.model('Device', deviceSchema);

exports.list = function (req, res) {
    return DeviceModel.find(function(err, devices) {
        if (!err) {
            return res.send(devices);
        } else {
            return console.log(err);
        }
    });
};

exports.create = function(req, res) {
    var device = new DeviceModel({
        name: req.body.name,
        type: req.body.type
    });

    device.save(function(err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("created device");
        }
    });

    return res.send(device);
};
