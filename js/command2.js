var searchObject = (function() {

    var onSearchChange = function() {
        var input = $('#searchInput').val();
        var commands = $('.command');
        if (input == '') {
            commands.show();
            return;
        }

        input = input.toLowerCase().split(' ');

        // Get the elements that contain the text in the data attributes.
        // data-command="{{ cmds.commandName }}" data-module="{{ cmds.module }}"
        // data-description="{{ cmds.oneLineDescription }}" data-extdescription="{{ cmds.extendedDescription }}"

        var show = commands.filter(function(i, e) {
            for (var j = 0; j < input.length; j++) {
                var current = input[j];
                if (current != "") {
                    var truth = $(e).attr("data-command").indexOf(current) !== -1
                        || $(e).attr("data-module").indexOf(current) !== -1
                        || $(e).attr("data-description").indexOf(current) !== -1
                        || $(e).attr("data-extdescription").indexOf(current) !== -1
                        || $(e).attr("data-aliases").indexOf(current) !== -1;
                    if (!truth) {
                        // Doesn't have this word. Not interested.
                        return false;
                    }
                }
            }

            return true;
        });

        commands.hide();
        show.show();
    };

    return {
        /**
         * Initialises the search routine
         */
        init: function () {
            $('#searchInput').keyup(function() {
                onSearchChange();
            });

            $('#searchForm').submit(function(e) {
                e.preventDefault();
            });
        }
    }

})();

$(document).ready(function() {
   searchObject.init();
});