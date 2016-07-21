// hammerify plugin
(function ($) {
     $.fn.extend({
        hammer: function(options) {
            return this.each(function() {
                var el = $(this);
                if(!el.data("hammer")) {
                    el.data("hammer", new Hammer(el[0], options));
                }
            });
        }
    });
}( jQuery ));

// pass jquery event though hammer event
(function (Hammer) {
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
})(Hammer);