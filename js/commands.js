var commandJS = (function() {

    return {
        init: function() {
            $('.command').click(function() {
                var ele = $(this).parent().children('.collapseablepanel');
                ele.slideToggle(250);
            });
        }
    }

})();

$(document).ready(function() {
    commandJS.init();
});