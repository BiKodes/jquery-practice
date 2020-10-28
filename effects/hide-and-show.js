// you can hide and show HTML elements with the hide() and show() methods:

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });

    $("#show").click(function(){
        $("p").show();
    })
})

// Syntax:
$(selector).hide(speed, callback);
$(selector).show(speed, callback);

// The optional speed parameter specifies the speed of the hiding/showing, and can take the following values: 
// "slow", "fast", or milliseconds.

// The optional callback parameter is a function to be executed after the hide() or show() method completes

$(document).ready(function(){
    $("button").click(function(){
        $("p").hide(1000);
    });
});


// toggle():
// Shown elements are hidden and hidden elements are shown:

$(document).ready(function(){
    $("p").toggle();
});

// $(selector).toggle(speed, callback);