/*
 * GET /devices/
 */

var devices = [
    { name: "Device1", type: "Type of device 1" },
    { name: "Device2", type: "Type of the other device" }];

exports.list = function (req, res) {
    res.send(devices);
};