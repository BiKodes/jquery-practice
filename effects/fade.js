// fadeIn() Method:
// is used to fade in a hidden element.

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

// fadeOut() Method:
// fadeOut() method is used to fade out a visible element.

$(document).ready(function(){
    $('button').click(function(){
        $("#div1").fadeOut();
        $("#div2").faddeOut("slow");
        $("#div3").fadeOut("3000");
    });
});

// fadeToggle() Method:
// It toggles between the fadeIn() and fadeOut() methods.
// If the elements are faded out, fadeToggle() will fade them in.
// If the elements are faded in, fadeToggle() will fade them out. 

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

// fadeTo() Method:
// fadeTo() method allows fading to a given opacity (value between 0 and 1).

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });
});