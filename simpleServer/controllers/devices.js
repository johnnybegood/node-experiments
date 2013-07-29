module.exports = function (app) {
    var mongoose = require("mongoose");

    var deviceSchema = new mongoose.Schema({
        name: String,
        type: String
    });

    var deviceModel = mongoose.model('Device', deviceSchema);

    mongoose.connect('mongodb://localhost/homegate');

    app.get('/devices', function(req, res) {
        return deviceModel.find(function(err, devices) {
            if (!err) {
                return res.send(devices);
            } else {
                return console.log(err);
            }
        });
    });

    app.post("/devices", function(req, res) {
        var device = new deviceModel({
            name: req.body.name,
            type: req.body.type
        });

        device.save(function(err) {
            if (err) {
                return console.log(err);
            } else {
                return console.log("created device");
            }
        });

        return res.send(device);
    });

    app.delete("/devices/:id", function(req, res) {
        var id = req.params.id;
        deviceModel.remove({ _id: id }, function(err) {
            if (err) {
                return console.log(err);
            } else {
                return console.log("deleted device " + id);
            }
        });
    });

    return app;
};
