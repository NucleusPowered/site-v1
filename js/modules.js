var modulesJs = (function() {

    var keepScroll = false;

    var focusTab = function() {
        var hash = $(location).attr('hash');

        if (hash !== undefined && hash !== null && hash !== '') {

            // If this is a tab, focus it.
            var res = $('a[href=\''+hash+'\'][role=\'tab\']');
            if (res.length >= 1) {
                res.tab('show');
                var remove = function(eventObject) {
                    $(window).off(eventObject, remove);
                    window.scrollTo(0, 0);
                };
                var ev = $(window).scroll(remove);
            } else {
                // See if there is a parent.
                var par = $(hash).closest('.tab-content > .tab-pane');
                if (par.length >= 1) {
                    // Get the id
                    var id = par.attr('id');
                    $('a[href=\'#'+id+'\'][role=\'tab\']').tab('show');
                }
            }
        }
    };

    return {
        init: function() {
            focusTab();
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                history.pushState(null, null, e.target.hash);
            });
        }
    }
})();

// On page complete.
$(document).ready(function() {
    modulesJs.init();
});

