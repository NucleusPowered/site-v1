// TeamCity
var t = (function() {

    var getNucleusData = function() {
        $.ajax("https://teamcity.drnaylor.co.uk/guestAuth/app/rest/builds")
            .done(function(data) {

            })
    }

    return {

    };
})();
