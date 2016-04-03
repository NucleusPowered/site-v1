var d = (function() {

    // (Some of) these quotes are from an old server website I used to run. They are a throwback to then
    var quotes = [
        "Nucleus, it's what's for dinner!", // Austin Powers - The Spy Who Shagged Me
        "Just a spoonful of Nucleus makes the medicine go down.", // Mary Poppins
        "Nucleus: The plugin that is never gonna give you up, nor let you down!",
        "Nucleus: Where you buy one, you get one free. I said, you buy one, you get one free!",
        "Nucleus: Have no fear, the Security Duck is here!",
        "Nucleus: Or maybe not, who knows?",
        "Nucleus: And that, as they say, is that.",
        "Nucleus: Eliminating the Kenco Curse, one step at a time.",
        "Nucleus: Loved for many things. But not the puns. Never the puns.",
        "Nucleus: The answer to the question, \"Which came first, the chicken or the egg?\"",
        "Nucleus: Where Rick Astley manages to get through with unanimous support. (We\'re never going to give him up!)",
        "Nucleus: Where rivers are big. Unless they are small rivers. Then they are quite small.",
        "Nucleus: Where Wednesday hasn\'t been seen since Thursday.",
        "To Nucleus... and beyond!", // Toy Story
        "May the Nucleus be with you!", // Star Wars
        "The Nucleus never bothered me anyway", // Frozen
        "Nucleus: It'll load. Eventually.",
        "Nucleus: it's the other, other white meat!", // Austin Powers - The Spy Who Shagged Me
        "Know this, Luke... I am your Nucleus!", // Star Wars
        "Nucleus. No commercials, NO MERCY!", // Anchorman
        "Nucleus: It's one louder, isn't it?", // Spinal Tap
        "Nucleus: It goes up to 11.", // Spinal Tap
        "The time-traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: Nucleus!" // Back to the Future: Part II
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