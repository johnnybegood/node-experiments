var Ip2Ir = function () {
    var connection = require("../connection");

    this.connections = [
        new connection({ direction: "in/out", name: "1:1" }),
        new connection({ direction: "in/out", name: "1:2" }),
        new connection({ direction: "in/out", name: "1:3" })
    ];

    this.name = "iTach IP2IR";
    this.code = "itach-ip2ir";
    this.manufacturer = "Global Caché";
};

Ip2Ir.prototype = require("../prototype");

module.exports = [new Ip2Ir()]