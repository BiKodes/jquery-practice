// Mouse Events:
 -click
 -dblclick
 -mouseenter
 -mouseleave

//  Keyboard Events:
-keypress
-keyup
-keydown

// Form Events:
-submit
-change
-focus
-blur


// Document/Window Events:
-load
-resize
-scroll
-unload

// assign a click event to all paragraphs on a page,
$("p").click();

// define what should happen when the event fires.
$("p").click(function(){
    //action goes here!!
});

// click():
// The click() method attaches an event handler function to an HTML element.
// When a click event fires on a <p> element; hide the current <p> element:
$("p").click(function(){
    $("this").hide();
})

// dblclick():

$("p").dblclick(function(){
    $(this).hide();
});

// mouseenter():
$("#p1").mouseenter(function(){
    alert("You entered p1!");
});

// mouseleave():

$("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
});

// mousedown():
// executed, when the left, middle or right mouse button is pressed down, 
// while the mouse is over the HTML element:

$("p1").mousedown(function(){
    alert("Mouse down over p1!");
});

// mouseup():
// The function is executed, when the left, middle or right mouse button is released,

$("#p").mouseup(function(){
    alert("Mouse up over p1!");
});

// hover():
// Takes two functions and is a combination of the mouseenter() and mouseleave() methods.

$("p1").hover(function(){
    alert("You entered p1!");
},
function(){
    alert("Bye! You now leave p1");
});

// focus():

$("input").focus(function(){
    $("this").css("background-color", "cccccc");
});

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "yellow");
    });

    $("input").blur(function(){
        $(this).css("background-color", "green");
    });
});


// blur():
// function is executed when the form field loses focus:

$("input").click(function(){
    $(this).css("background-color", "#ffffff");
});

// The on() Method:
// attaches one or more event handlers for the selected elements.

$("p").on("click", function(){
    $(this).hide();
});

// Attach multiple event handlers to a <p> element:

$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    },

    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    },

    click: function(){
        $(this).css("background-color", "yellow");
    }
});
