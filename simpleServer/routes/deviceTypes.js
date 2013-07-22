/*
 * GET /devicesTypes/
 */

var deviceTypes = [
    { name: "Device Type 1", code: "d1" },
    { name: "Device Type 2", code: "d2" }];

exports.list = function (req, res) {
    res.send(deviceTypes);
};