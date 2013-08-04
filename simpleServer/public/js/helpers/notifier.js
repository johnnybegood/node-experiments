define([
        "underscore",
        "jquery"],
    function(_, $) {
        var notifier = function () {
            var notifications = [];

            function alert(timeout, kind, message, origin, location) {
                if (!location) { location = $(".alert-holder"); }
                
                var css = "alert";
                if (kind != "warning") { css += " alert-" + kind; }

                if (origin) {
                    clearOlderAlerts(origin);
                }

                var holder = createAlert(css, message, location, origin);
                
                if (timeout) {
                    setTimeout(_.partial(onTimeout, holder), timeout);
                }
            }
            
            function clearOlderAlerts(origin) {
                _.each(_.where(notifications, { origin: origin }), function(x) {
                    $(x.el).remove();
                });
            }
            
            function createAlert(css, message, location, origin) {
                var holder = $("<div/>")
                    .addClass(css)
                    .append("<button type='button' class='close' data-dismiss='alert'>&times;</button>")
                    .append(message)
                    .appendTo(location)
                    .alert()
                    .focus();

                notifications.push({ el: holder, origin: origin });

                return holder;
            }
            
            function onTimeout(holder) {
                if (holder) {
                    $(holder).remove();
                }
            }

            return {
                warning: _.partial(alert, null, "warning"),
                error: _.partial(alert, null, "error"),
                success: _.partial(alert, 1500, "success"),
                info: _.partial(alert, 2000, "info"),
            };
        };

        return new notifier();
    });