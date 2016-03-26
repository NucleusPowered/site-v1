var d = (function() {

    // (Some of) these quotes are from an old server website I used to run. They are a throwback to then
    var quotes = [
        "QuickStart, it's what's for dinner!", // Austin Powers - The Spy Who Shagged Me
        "Just a spoonful of QuickStart makes the medicine go down.", // Mary Poppins
        "QuickStart: The plugin that is never gonna give you up, nor let you down!",
        "QuickStart: Where you buy one, you get one free. I said, you buy one, you get one free!",
        "QuickStart: Have no fear, the Security Duck is here!",
        "QuickStart: Or maybe not, who knows?",
        "QuickStart: And that, as they say, is that.",
        "QuickStart: Eliminating the Kenco Curse, one step at a time.",
        "QuickStart: Loved for many things. But not the puns. Never the puns.",
        "QuickStart: The answer to the question, \"Which came first, the chicken or the egg?\"",
        "QuickStart: Where Rick Astley manages to get through with unanimous support. (We\'re never going to give him up!)",
        "QuickStart: Where rivers are big. Unless they are small rivers. Then they are quite small.",
        "QuickStart: Where Wednesday hasn\'t been seen since Thursday.",
        "To QuickStart... and beyond!", // Toy Story
        "May the QuickStart be with you!", // Star Wars
        "The QuickStart never bothered me anyway", // Frozen
        "You\'re only supposed to blow the QuickStart doors off!", // The Italian Job
        "QuickStart: It'll load. Eventually.",
        "QuickStart: it's the other, other white meat!", // Austin Powers - The Spy Who Shagged Me
        "Know this, Luke... I am your QuickStart!", // Star Wars
        "QuickStart. No commercials, NO MERCY!", // Anchorman
        "QuickStart: It's one louder, isn't it?", // Spinal Tap
        "QuickStart: It goes up to 11.", // Spinal Tap
        "The time-traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: QuickStart!" // Back to the Future: Part II
    ];

    var regen = function() {
        var ra = Math.floor((Math.random() * quotes.length));
        $('#qs-quote').text(quotes[ra]);
    };

    return {
        init: function() {
            regen();
            $('#qs-quote').click(function() {
                regen();
            });
        }
    }

})();

// On page complete.
$(document).ready(function() {
    d.init();
});