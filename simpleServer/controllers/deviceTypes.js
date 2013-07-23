/*
 * GET /devicesTypes/
 */

module.exports = function (app) {
    var deviceTypes = [
        { name: "Device Type 1", code: "d1" },
        { name: "Device Type 2", code: "d2" }];

    app.get("/devicetypes", function(req, res) {
        res.send(deviceTypes);
    });
};