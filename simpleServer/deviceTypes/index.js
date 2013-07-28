var DeviceTypes = function () {
    var categories = ["ir"];
    var types = [];
    var _ = require("underscore");

    function initialize() {
        ///<summary>Intilialeze deviceTypes</summary>
        for (var i = 0; i < categories.length; i++) {
            var list = require("./" + categories[i]);
            types = _.union(types, list);
        }
    }

    function all() {
        return types;
    }

    /****************************************************/

    initialize();
    this.all = all;
};

module.exports = new DeviceTypes();