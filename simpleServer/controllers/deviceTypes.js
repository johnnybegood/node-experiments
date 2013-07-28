/*
 * GET /devicesTypes/
 */

module.exports = function (app) {
    var types = require("../deviceTypes");

    app.get("/devicetypes", function(req, res) {
        res.send(types.all());
    });
};