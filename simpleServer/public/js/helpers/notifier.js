define([
        "underscore",
        "jquery"],
    function(_, $) {
        var notifier = function() {

            function alert(kind, message, location) {
                if (!location) {
                    location = $(".alert-holder");
                }

                var css = "alert";
                
                if (kind != "warning") {
                    css += " alert-" + kind;
                }

                $("<div/>")
                    .addClass(css)
                    .append("<button type='button' class='close' data-dismiss='alert'>&times;</button>")
                    .append(message)
                    .appendTo(location)
                    .alert()
                    .focus();
            }

            return {
                warning: _.partial(alert, "warning"),
                error: _.partial(alert, "error"),
                success: _.partial(alert, "success"),
                info: _.partial(alert, "info"),
            };
        };

        return new notifier();
    });