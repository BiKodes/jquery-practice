// animate() Method
// $(selector).animate({params},speed,callback);
// params parameter defines the CSS properties to be animated.
// it moves a <div> element to the right, until it has reached a left property of 250px:

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({letf: '250px'});
    });
});

// animate() - Manipulate Multiple Properties:
// multiple properties can be animated at the same time:
// It is possible to manipulate ALL CSS properties with the animate() method
// All property names must be camel-cased when used with the animate() method
// color animation is not included in the core jQuery library.
// If you want to animate color, you need to download the Color Animations plugin from jQuery.com.

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            let: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'

        });
    });
});

// animate() - Using Relative Values:
// It is also possible to define relative values (the value is then relative to the element's current value)
// This is done by putting += or -= in front of the value:


$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            letf: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});


// animate() - Using Pre-defined Values:
// You can even specify a property's animation value as "show", "hide", or "toggle":

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            height: 'toggle'
        });
    });
});

// animate() - Uses Queue Functionality:
// It comes with queue functionality for animations.
// If you write multiple animate() calls after each other, 
// jQuery creates an "internal" queue with these method calls.
// Then it runs the animate calls ONE by ONE.
// If you want to perform different animations after each other, we take advantage of the queue functionality:

$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});


$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });
});